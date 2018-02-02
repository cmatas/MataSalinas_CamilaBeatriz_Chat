const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res)=> {
  res.sendFile(path.resolve(__dirname, '../views/index.html')); // route to the page
});

module.exports = router;
