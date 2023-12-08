const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const DownloadSchema = new Schema({
    UserId:{
        type:String
    },
    url:{
        type:String
    }
})

const Url = mongoose.model('Url',DownloadSchema)

module.exports = {Url}



// const Sequelize = require('sequelize');

// const sequelize= require('../utility/database');

// const Url = sequelize.define('downloadurl', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true
//     },
//     url: Sequelize.STRING,
// })

// module.exports = Url;