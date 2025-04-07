const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: Object,
  name: String,
  address: String,
  date: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Order', OrderSchema);
