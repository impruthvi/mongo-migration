const mongoose = require("mongoose");


const testSchema = new mongoose.Schema({
    name: String
});

mongoose.model('test', testSchema);