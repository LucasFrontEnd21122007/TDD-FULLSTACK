const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const tasks = [];

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const newTask = req.body.task;
  tasks.push({ task: newTask });
  res.status(201).json({ task: newTask });
});

app.listen(3000, () => {
  console.log('Servidor está rodando na porta 3000');
});

module.exports = app;