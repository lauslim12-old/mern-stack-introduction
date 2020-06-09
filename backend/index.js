const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
const Database = require('./configurations/Database');
const PORT = 8000;

const todoRoutes = require('./routes/apiRoutes');

// Global Middlewares
const app = express();
const db = new Database();
db.authenticate();
db.synchronizeDatabase();

// Setting
app.use(cors());
app.use(bodyParser.json());
app.use(compression());
app.use(helmet());
app.use('/todos', todoRoutes);

app.listen(PORT, function() {
  console.log("Server is running on port: " + PORT);
});