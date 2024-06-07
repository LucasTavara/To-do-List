const task = require('../models/Task')


const getAll = (req, res) => {
 return res.render("index");
}

const Task = {
  getAll: (callback) => {
    connection.query('SELECT * FROM tasks', callback);
  },
  create: (taskData, callback) => {
    connection.query('INSERT INTO tasks SET ?', taskData, callback);
  }
};

module.exports = {
 getAll,
 Task
}