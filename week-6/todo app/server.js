const express = require('express');
const app = express();
const todoRouter = require('./routes/TodoRoute');
const PORT = 9000;
app.use(express.json());
app.use('/list', todoRouter);
app.listen(PORT, () => {
    console.log('app running PORT 9000')
})