const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware'); // Make sure this is correctly imported

// Route for fetching and adding books
router.route('/').get(getBooks).post(protect, addBook);

module.exports = router;
