const express = require('express');
const mongoose = require('mongoose');
const foodRouter = require('../src/routes/foodRouter');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

mongoose.connect('', {
    retryWrites: true,
    w: 'majority',
    appName: ''
});

app.use('/api', foodRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
