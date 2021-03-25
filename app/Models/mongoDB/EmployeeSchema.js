const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const EmployeeSchema = new Schema({
    first_name:{
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required:true
    },
    password: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('employees', EmployeeSchema);
