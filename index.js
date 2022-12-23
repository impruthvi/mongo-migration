require('./db');
const mongoose = require('mongoose');
const express = require('express');

const app = express();

const Test = mongoose.model('test');

const test = async() => {
    await Test.create({ name: "asdds" })
};
test();
app.listen(3000, () => {
    console.log(`listening on port 3000`);
})