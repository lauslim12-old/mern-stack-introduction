// Third party imports.
const compression = require('compression');
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const helmet = require('helmet');

// Personal imports.
const Database = require('./configurations/Database');
const todoRoutes = require('./routes/apiRoutes');

// Configure Dotenv
dotenv.config({ path: '.env' });

// Application Setup
const app = express();

// Database Synchronization
const db = new Database();
db.authenticate();
db.synchronizeDatabase();

// Middleware Stack
app.use(express.json({ limit: '5kb' }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use('/todos', todoRoutes);

app.listen(process.env.PORT, function () {
  console.log('Server is running on port: ' + process.env.PORT);
});
