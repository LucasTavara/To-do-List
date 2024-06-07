const express = require('express');
const path = require("path");
const routes = require("./routes/routes")
const con = require('./database/db.js');




const app = express();
const port = 3000;


app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(routes)

app.get('/departament', (req, res) => {
  con.query('SELECT * TODOLIST', (err, result) =>{
  res.send(result)
    if (err) {
      console.error('Erro ao conectar ao banco de dados:', err);
      return;
    }
    console.log('Conexão bem-sucedida ao banco de dados.');
})

})

app.listen(port,() => 
console.log(`Servidor rodando em http://localhost:${port}`)
);