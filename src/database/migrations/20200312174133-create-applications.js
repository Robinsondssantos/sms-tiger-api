module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('applications', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      apiKey: { // tYiT7U17L8qyABl0gFSnYQ
        type: Sequelize.STRING,
        allowNull: false
      },
      // In future!
      // apiSecretKey: { // SuhTcCpw8aHbPWpPPMqtaM35RStSFeeOzHV8jnoLs
      //   type: Sequelize.STRING,
      //   allowNull: false
      // },
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

  down: queryInterface => {
    return queryInterface.dropTable('applications');
  }
};
