var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('crises', { title: 'TreeHacks Crisis Manual', pagetitle: 'crises' });
});

module.exports = router;
