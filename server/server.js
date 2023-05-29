const express = require('express');
const app= express();

app.use(express.json());
app.use('/', require('./route/userRoute'));
app.use('/', require('./route/notaRoute'));
app.listen(3000);