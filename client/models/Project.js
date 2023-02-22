const mongoose = require('mongoose')

const Schema = mongoose.Schema

const projectSchema = new Schema({
    title: String,
    description: String,
    skills: [String],
    image: {
        data: Buffer,
        contentType: String,
    },
    url: String
})

module.exports = mongoose.model('Project', projectSchema)