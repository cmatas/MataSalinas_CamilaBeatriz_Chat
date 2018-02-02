const express = require('express');
const router = express.Router();
const path = require('path');

// portfolio page include
router.get('/portfolio', (req, res)=> { // <-- you need to put the kind of extension
  res.sendFile(path.resolve(__dirname, '../views/portfolio.html')); // route to the page
});

module.exports = router;
