const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const forgotPasswordSchema = new Schema({
    UserId:{
        type:String
    },
    active:{
        type:Boolean,     
    },
    expiresby:{
        type:Date
    }
})

const ForgotPassword = mongoose.model('ForgotPassword',forgotPasswordSchema)

module.exports = {ForgotPassword}

// const Sequelize = require('sequelize');
// const sequelize = require('../utility/database');


// const Forgotpassword = sequelize.define('forgotpassword', {
//     id: {
//         type: Sequelize.UUID,
//         allowNull: false,
//         primaryKey: true
//     },
//     active: Sequelize.BOOLEAN,
//     expiresby: Sequelize.DATE
// })

// module.exports = Forgotpassword;

