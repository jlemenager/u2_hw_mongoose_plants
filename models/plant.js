const db = require('../db')
const mongoose = require('mongoose')
const{ Schema } = require('mongoose')


db.on('error', console.error.bind(console, 'MongoDB connection error'))

const Plant = new Schema(
    {
        name: {type:String, required:true},
        description: {type:String, required:true},
        image: {type: String, required:true}
    }, 
    {timestamps: true}
)

module.exports = mongoose.model('plants', Plant)