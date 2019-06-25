const mongoose = require('mongoose');
const ColunmSchema = require('./ColunmSchema');

const ColunmModel = mongoose.model('ColunmModel', ColunmSchema)

module.exports = ColunmModel
