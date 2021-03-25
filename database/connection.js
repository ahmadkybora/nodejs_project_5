let config = require('./config.js');
const { Sequelize } = require('sequelize');

module.exports = new Sequelize(config.database, config.username, config.password, {
    dialect: 'mariadb',
    dialectOptions: {
        connectTimeout: 1000
    }
});


