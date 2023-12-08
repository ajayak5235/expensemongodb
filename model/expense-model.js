const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const expenseSchema = new Schema({
    UserId:{
      type:String
    },
amount:{
    type:Number
},
description:{
    type:String
},
category:{
    type:String
}
})

const Expense = mongoose.model('Expense',expenseSchema)

module.exports = {Expense}





// const Sequelize = require('sequelize');

// const sequelize= require('../utility/database');

// const Expense = sequelize.define('expense', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     amount: Sequelize.INTEGER,
//     description: Sequelize.STRING,
//     category: Sequelize.STRING
// })

// module.exports = Expense;