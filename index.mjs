import express from 'express';
const express = require('express');

export function sum(a, b) {
  return a + b;
}
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// TODO: todo app api
app.get('/todos', (req, res) => {
  res.send('List of todos');
});

app.get('/todos/:id', (req, res) => {
  res.send(`Todo with id ${req.params.id}`);
});

app.post('/todos', (req, res) => {
  res.send('Create a new todo');
});

app.put('/todos/:id', (req, res) => {
  res.send(`Update todo with id ${req.params.id}`);
});

app.delete('/todos/:id', (req, res) => {
  res.send(`Delete todo with id ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
