import * as Yup from 'yup';
import Application from '../models/Application';

class ApplicationController {

  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { id, name, apiKey } = await Application.create(req.body);

    return res.json({ id, name, apiKey });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    
    const applicationExists = await Application.findByPk(req.params.id)
    
    if (applicationExists) {
      return res.status(400).json({ error: 'Application does not exists' })
    }

    const { id, name, apiKey } = await Application.update(req.body);

    return res.json({ id, name, apiKey });
  }
}

export default new ApplicationController();