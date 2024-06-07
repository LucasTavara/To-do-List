# Documentação do Projeto To Do List em Node.js, Express e MySQL

## Introdução
Este documento descreve o processo de criação e configuração de um projeto To Do List utilizando Node.js, Express e MySQL. O objetivo é fornecer um guia detalhado para
facilitar a compreensão e replicação do projeto.

## Estrutura do Projeto
1. *Criação da Pasta do Projeto*
   - Foi criada uma pasta para o projeto To Do List em Node.js.

2. *Criação da Branch Principal*
   - Após a criação da pasta, foi criada uma branch principal chamada head.

3. *Configuração Inicial*
   - Iniciamos a configuração das ferramentas básicas para o projeto.
   - Criamos um script no package.json para iniciar a aplicação com o comando npm run dev.

4. *Instalação de Dependências*
   - Instalamos o Express para gerenciar as rotas e o servidor.
   - Instalamos o EJS para facilitar a renderização de páginas HTML.
   - Instalamos o MySQL para gerenciar a conexão com o banco de dados.

5. *Configuração do EJS*
   - Configuramos o EJS para que a leitura das páginas HTML pela máquina fosse tranquila.
   - No arquivo index.html, fizemos com que o arquivo CSS fosse lido sem precisar usar o link de uma pasta específica.

6. **Configuração do Arquivo index.js**
   - No arquivo index.js, configuramos o caminho para identificar se os arquivos do projeto estão na pasta pública e referenciamos esses arquivos corretamente.

7. *Configuração das Rotas*
   - Configuramos as rotas para obter uma arquitetura mais correta no projeto web.
   - Criamos rotas para adicionar, editar, excluir e listar tarefas.

8. *Conexão com o Banco de Dados*
   - Instalamos as ferramentas necessárias para conectar o projeto ao banco de dados MySQL.
   - Configuramos a conexão com o banco de dados no arquivo index.js.

9. *Criação das Tabelas no Banco de Dados*
   - Dentro do banco de dados, replicamos o que foi instruído na documentação para criar as tabelas membro e tarefa.

## Passo a Passo Detalhado

### 1. Criação da Pasta do Projeto
bash
mkdir todo-list
cd todo-list


### 2. Inicialização do Projeto Node.js
bash
npm init -y


### 3. Criação da Branch Principal
bash
git init
git checkout -b main


### 4. Instalação de Dependências
bash
npm install express ejs mysql


### 5. Configuração do Script npm run dev
No arquivo package.json, adicione o seguinte script:
json
"scripts": {
  "dev": "nodemon index.js"
}

### 6. Configuração do EJS
No arquivo index.js, configure o EJS:
javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


### 7. Configuração do Arquivo index.js
No arquivo index.js, configure o caminho para os arquivos públicos:
javascript
app.use(express.static('public'));


### 8. Configuração das Rotas
No arquivo index.js, configure as rotas:
javascript
app.get('/', (req, res) => {
  res.render('index');
});


### 9. Conexão com o Banco de Dados
No arquivo index.js, configure a conexão com o banco de dados:
javascript
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'todolist'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the database');
});


### 10. Criação das Tabelas no Banco de Dados
No MySQL, execute os seguintes comandos para criar as tabelas:
sql
CREATE TABLE membro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    nome VARCHAR(50) NOT NULL,
    prioridade ENUM('Baixa', 'Média', 'Alta') DEFAULT 'Baixa' NOT NULL
);

CREATE TABLE tarefa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(50) NOT NULL,
    descricao VARCHAR(140),
    finalizada ENUM('False', 'True') NOT NULL,
    data_termino DATETIME,
    prioridade ENUM('Baixa', 'Media', 'Alta') NOT NULL,
    id_membro INT,
    FOREIGN KEY (id_membro) REFERENCES membro(id)
);


## Conclusão
O projeto tem muito a ser feito, isso só é a ponta do Iceberg, como ponta pé inicial cuidei para que fosse feito a parte de configuração e a parte introdutória sobre o front.
