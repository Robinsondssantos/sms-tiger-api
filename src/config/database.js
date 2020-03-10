module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'sms-tiger-db',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
}