import SMS from '../../services/sms'

class SendSmsJob {

  get jobTypeName() {
    return 'SendSMS';
  }

  async handle({ data }) {
    const { from, to, msg, id } = data;
    try {
      const result = await SMS.send(from, to, msg, id);
      console.log('result.data:', result.data);   

    } catch(err) {
      console.log('err:', err);
    }
  }
}

export default new SendSmsJob;