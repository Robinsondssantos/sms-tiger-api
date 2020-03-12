import Sequelize, { Model } from 'sequelize'
import bcrypt from 'bcryptjs'

class Application extends Model {

  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        apiKey: Sequelize.STRING
      },
      {
        sequelize
      }
    )
    this.addHook('beforeSave', async appliation => {
      appliation.apiKey = await bcrypt.hash('something-random-here', 8)
    })

    return this
  }
}

export default Application