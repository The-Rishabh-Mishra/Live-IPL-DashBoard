import express from 'express';
import Match from '../models/Match.js';

const router = express.Router();

// GET all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
