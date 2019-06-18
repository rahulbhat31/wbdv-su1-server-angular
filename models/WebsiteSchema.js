const mongoose = require('mongoose')
const PageSchema = require('./PageSchema')

const WebsiteSchema = mongoose.Schema({
    title: String,
    pages: [PageSchema]
});

module.exports = WebsiteSchema;