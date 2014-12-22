var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('schedule', { title: 'TreeHacks Schedule', pagetitle: 'schedule' });
});

module.exports = router;