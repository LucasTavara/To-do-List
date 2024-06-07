const express = require('express');
const app = express();

app.get('/home',  (req, res) => {
  res.send('Hello World');
});

app.listen(port,() => console.console.log(`Servidor rodando em http://localhost:${port}`)
);