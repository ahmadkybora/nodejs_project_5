const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const sequelize = require('./database/connection');

// Map global promise - get rid of warning
mongoose.Promise = global.Promise;
// Connect to mongoose
/*mongoose.connect(db.mongoURI, {
    useMongoClient: true
})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));*/

/*const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('nodejs_project_5', 'root', '', {
    dialect: 'mariadb',
    dialectOptions: {
        connectTimeout: 1000
    }
});*/

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

// Load routes
//this routes for front
/*const homeRoutes = require('./routes/front/homeRoutes');*/

//this routes for panel
/*const employeesRoutes = require('./routes/panel/employeeRoutes');
const usersRoutes = require('./routes/panel/employeeRoutes');*/

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load routes
app.use('/', require('./routes/front/homeRoutes'));
app.use('/panel/employees', require('./routes/panel/employeeRoutes'));
app.use('/panel/users', require('./routes/panel/employeeRoutes'));

//
const port = process.env.PORT || 5000;
app.listen(port, () =>{
    console.log(`Server started on port ${port}`);
});
module.exports = app;
