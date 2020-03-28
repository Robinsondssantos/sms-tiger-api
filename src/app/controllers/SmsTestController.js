import * as Yup from 'yup';
import JobPool from '../../services/JobPool';
import SendSmsJob from './../jobs/SendSmsJob';


class SmsTestController {

  async store(req, res) {
    const schema = Yup.object().shape({
      from: Yup.string().required(),
      to: Yup.string().required(),
      msg: Yup.string().required()   
    })

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    await JobPool.add(SendSmsJob.jobTypeName, {
      from: req.body.from,
      to: req.body.to,
      msg: req.body.msg,
      id: Date.now()
    });

    res.json({ status: 'SMS scheduled'});
  }
}

export default new SmsTestController();