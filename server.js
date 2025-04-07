const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/order');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', authRoutes);
app.use('/api', orderRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
