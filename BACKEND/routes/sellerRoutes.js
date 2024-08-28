const express = require('express');
const router = express.Router();
const Seller = require('../models/Seller'); // Assuming you have a Seller model defined in models/Seller.js

// GET: Fetch all sellers or search by name
router.get('/sellers', async (req, res) => {
  try {
    const { name } = req.query;

    let sellers;
    if (name) {
      // If a search query is provided, filter sellers by name
      sellers = await Seller.find({ name: { $regex: name, $options: 'i' } });
    } else {
      // If no search query is provided, return all sellers
      sellers = await Seller.find({});
    }

    res.json(sellers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sellers', error: error.message });
  }
});

// POST: Create a new seller
router.post('/sellers', async (req, res) => {
  const { name, rating, review } = req.body;

  // Validate input
  if (!name || !rating || !review) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newSeller = new Seller({
      name,
      rating,
      review,
    });

    await newSeller.save();
    res.status(201).json(newSeller);
  } catch (error) {
    res.status(500).json({ message: 'Error creating seller', error: error.message });
  }
});

module.exports = router;
