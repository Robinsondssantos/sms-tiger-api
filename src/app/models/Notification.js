import Sequelize, { Model } from 'sequelize'

class Notification extends Model {

  static init(sequelize) {
    // https://zenviasms.docs.apiary.io/#introduction/autenticacao
    super.init(
      {
        fromSender: Sequelize.STRING, // Name of semder
        toRecipient: Sequelize.STRING, // Number - required
        msg: Sequelize.STRING, // required
        schedule: Sequelize.DATE, // 2014-07-18T02:01:23
        msgId: Sequelize.STRING, // string
        callbackOption: Sequelize.STRING, // enum
        aggregateId: Sequelize.STRING, // number
        flashSms: Sequelize.BOOLEAN
        // flashSms: false
      },
      {
        sequelize
      }
    )

    return this
  }
}

export default Notification