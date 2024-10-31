const express = require('express');
const bodyParser = require('body-parser');
const todosRouter = require('./src/routes/todos');

const app = express();
app.use(bodyParser.json());
app.use('/todos', todosRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
