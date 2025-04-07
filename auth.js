const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let user = await User.findOne({ email });
  if (!user) {
    user = await User.create({ email, password });
    return res.json({ message: "Account created", user });
  }
  if (user.password !== password) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  res.json({ message: "Login successful", user });
});

module.exports = router;
