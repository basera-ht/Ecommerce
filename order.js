const express = require('express');
const router = express.Router();
const Order = require('../models/Order');

router.post('/order', async (req, res) => {
  const { name, address, user } = req.body;
  await Order.create({ name, address, user });
  res.json({ message: "Order placed successfully" });
});

module.exports = router;
