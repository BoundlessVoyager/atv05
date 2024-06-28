const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('../src/routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://claudio:3XFEntPiuVgCHEt@atividade05.9realzl.mongodb.net', {
    retryWrites: true,
    w: 'majority',
    appName: 'Atividade05'
});

app.use('/api', foodRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});