const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const orderSchema = new Schema({
    UserId:{
        type:String
    },
    paymentId:{
        type:String
    },
    orderId:{
        type:String
    },
    status:{
        type:String
    }
})

const Order = mongoose.model('Order',orderSchema)

module.exports = {Order}



// const Sequelize = require('sequelize');
// const sequelize = require('../utility/database');

// const Order = sequelize.define('order', {
//     id:{
//         type: Sequelize.INTEGER,
//         autoIncrement : true ,
//         allowNull: false,
//         primaryKey:true
//     },
//     paymentId: Sequelize.STRING,
//     orderId: Sequelize.STRING,
//     status: Sequelize.STRING
// })

// module.exports = Order;