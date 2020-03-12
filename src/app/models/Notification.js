import Sequelize, { Model } from 'sequelize'

class Notification extends Model {

  static init(sequelize) {
    super.init(
      {
        recipientPhone: Sequelize.STRING,
        msg: Sequelize.STRING
      },
      {
        sequelize
      }
    )

    return this
  }
}

export default Notification