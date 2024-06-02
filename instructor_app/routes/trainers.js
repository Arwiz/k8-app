const express = require('express');
const router = express.Router();
const Trainer = require('../models/trainer');

// Get all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.json(trainers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new trainer
router.post('/', async (req, res) => {
  const trainer = new Trainer({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const newTrainer = await trainer.save();
    res.status(201).json(newTrainer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
