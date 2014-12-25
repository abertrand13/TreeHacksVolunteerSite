var express = require('express');
var router = express.Router();
var pg = require('pg');

/* GET contact info for everyone */
router.get('/', function(req, res) {
	
	//add error checking

	pg.connect(process.env.DATABASE_URL, function(err, client) {
		var query = client.query('SELECT * FROM contacts');

		query.on('row', function(row, result) {
			result.addRow(row);
		});

		query.on('end', function(result) {
			res.json(result.rows);
		});
	});
});

module.exports = router;
