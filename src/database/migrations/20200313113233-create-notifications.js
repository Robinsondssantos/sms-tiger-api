module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notifications', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      fromSender: {
        type: Sequelize.STRING,
        allowNull: false
      },
      toRecipient: {
        type: Sequelize.STRING,
        allowNull: false
      },
      msg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      schedule: {
        type: Sequelize.DATE,
      },
      msgId: {
        type: Sequelize.STRING
      },
      callbackOption: {
        type: Sequelize.STRING,
      },
      aggregateId: {
        type: Sequelize.STRING,
      },
      flashSms: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      sent: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('notifications');
  }
};
