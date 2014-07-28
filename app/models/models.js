var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/sys");

module.exports = mongoose;