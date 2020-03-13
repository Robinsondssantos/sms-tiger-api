import * as Yup from 'yup';
import Notification from '../models/Notification';

class NotificationController {

  async store(req, res) {
    const schema = Yup.object().shape({
      fromSender: Yup.string().required(),      
      toRecipient: Yup.string().required(),
      msg: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'} );
    }

    const { 
      id, 
      fromSender, 
      toRecipient, 
      msg 
    } = await Notification.create(req.body);

    return res.json({
      id,
      fromSender,
      toRecipient,
      msg
    })
  }
}

export default new NotificationController();