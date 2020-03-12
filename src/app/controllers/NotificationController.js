import * as Yup from 'yup';

class NotificationController {

  async store(req, res) {
    const schema = Yup.object().shape({
      to: Yup.string().required(),
      msg: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails'} );
    }
  }
}

export default new NotificationController();