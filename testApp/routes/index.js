var express = require('express');
var router = express.Router();

const templateTypes = [
  { name: "Jade", usefulness : "sucky" },
  { name: "EJS", usefulness : "a little better" },
  { name: "Handlebars", usefulness : "awesome" },
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
    title: 'Handlebars',
    // descriptor: 'better',
    // method: 'php',
    templates: templateTypes
  });
});

module.exports = router;
