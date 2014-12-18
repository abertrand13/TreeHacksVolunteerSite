var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('announcements', { title: 'TreeHacks Announcements', pagetitle: 'announcements' });
});

module.exports = router;
