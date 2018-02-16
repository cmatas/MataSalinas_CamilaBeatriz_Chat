const express = require('express');
const router = express.Router();
const path = require('path');

// portfolio page include
router.get('/contact', (req, res)=> { // <-- you need to put the kind of extension
  res.sendFile(path.resolve(__dirname, '../views/contact.html')); // route to the page, allso double underscore
});

module.exports = router;
