const Sequelize = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

class Database {
  constructor() {
    const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
      host: process.env.DB_HOST,
      dialect: process.env.DB_ENGINE,
      dialectOptions: {
        timezone: 'Etc/GMT+7',
      },
      timezone: '+07:00'
    });

    this._sequelize = sequelize;
  }

  get connection() {
    return this._sequelize;
  }

  authenticate() {
    const sequelize = this.connection;
    sequelize
      .authenticate()
      .then(() => {
        console.log("Connection has been established!");
      })
      .catch((err) => {
        console.error("Unable to connect to the database! Error code: ", err);
      });
  }

  synchronizeDatabase() {
    const Todo = this.connection.import("../models/Todo");
    Todo.sync({ force: true }).then(() => {
      Todo.create({
        todoTitle: 'Create a MERN Application with Node.js!',
        todoResponsibility: 'Nicholas',
        todoPriority: 'High',
        todoCompleted: false
      });
      Todo.create({
        todoTitle: 'Create an Express.js Application with Node.js!',
        todoResponsibility: 'Nicholas',
        todoPriority: 'High',
        todoCompleted: false
      });
      Todo.create({
        todoTitle: 'Create a MariaDB Application with Sequelize and Node.js!',
        todoResponsibility: 'Nicholas',
        todoPriority: 'High',
        todoCompleted: false
      });
      Todo.create({
        todoTitle: 'Create a React Application with Node.js!',
        todoResponsibility: 'Nicholas',
        todoPriority: 'High',
        todoCompleted: false
      });
      Todo.create({
        todoTitle: 'Create a Node.js Application!',
        todoResponsibility: 'Nicholas',
        todoPriority: 'High',
        todoCompleted: false
      });
    });
  }

}

module.exports = Database;