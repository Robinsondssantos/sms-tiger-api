import Queue from 'bee-queue';
import SendSmsJob from '../app/jobs/SendSmsJob'
import redisConfig from '../config/redis';


const jobTypes = [SendSmsJob]

class JobPool {

  constructor() {
    this.jobPool = {};
    this.init();
  }

  init() {
    jobTypes.forEach(({ jobTypeName, handle }) => {
      this.jobPool[jobTypeName] = {
        queue: new Queue(jobTypeName, {
          redis: redisConfig,
        }),
        handle,
      };
    });
  }

  add(jobTypeName, job) {
    return this.jobPool[jobTypeName].queue.createJob(job).save();
  }

  processJobTypes() {
    jobTypes.forEach(jobType => {
      const { queue, handle } = this.jobPool[jobType.jobTypeName];
      queue.on('failed', this.handleFailure).process(handle);
    })
  }

  handleFailure(jobType, err) {
    console.log(`Queue ${jobType.queue.name}: FAILED`, err);
  }
}

export default new JobPool();

