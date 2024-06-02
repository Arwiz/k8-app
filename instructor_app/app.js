const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const MONGO_HOST = process.env.MONGO_HOST || 'localhost';
const MONGO_PORT = process.env.MONGO_PORT || '27017';
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Connect to MongoDB
mongoose.connect(`mongodb://${MONGO_HOST}:${MONGO_PORT}/trainersdb`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
const trainersRouter = require('./routes/trainers');
app.use('/trainers', trainersRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
