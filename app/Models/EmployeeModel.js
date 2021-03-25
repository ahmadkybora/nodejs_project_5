const { Sequelize } = require('sequelize');
const dbCon = require('../../database/connection');

const Employee = dbCon.define('Employee', {
    first_name: {
        type: Sequelize.STRING
    },
    last_name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    },
    created_at: {
        allowNull: false,
        type: Sequelize.DATE
    },
    updated_at: {
        allowNull: false,
        type: Sequelize.DATE
    }
});

module.exports = Employee;
