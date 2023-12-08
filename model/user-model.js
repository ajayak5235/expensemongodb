const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    ispremiumuser: {
        type:Boolean
    },
    totalExpense:{
        type:Number,
        default:0
    }
})

const User = mongoose.model('User',userSchema)

module.exports = {User}





// const Sequelize = require('sequelize');

// const sequelize= require('../utility/database');

// const User = sequelize.define('user', {
//         id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         name: Sequelize.STRING,
//         email: {
//             type: Sequelize.STRING,
//             unique: true,
//             allowNull: false
//         },
//         password: Sequelize.STRING,
//          ispremiumuser: Sequelize.BOOLEAN,
//          totalExpenses: {
//              type: Sequelize.INTEGER,
//              defaultValue: 0,
//          }
//     })

// module.exports = User;