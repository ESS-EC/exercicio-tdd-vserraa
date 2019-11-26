var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors());

app.get('/converterTemperatura', function (req, res) {
	query = req.query;
	var ans = null;
	
	if (!query.hasOwnProperty('valor') || !query.hasOwnProperty('de') 
		|| !query.hasOwnProperty('para') || Object.keys(query).length != 3 || isNaN(query['valor'])) {
		res.sendStatus(400); //Bad request
	}
	else {
		var val = parseFloat(query['valor']);
		if (query['de'] == 'C' && query['para'] == 'F') {
			ans = val * 9 / 5 + 32;
			res.send({'valor' : ans});
		}
		else if (query['de'] == 'C' && query['para'] == 'K') {
			ans = val + 273.15;
			res.send({'valor' : ans});
		}
		else if (query['de'] == 'F' && query['para'] == 'C') {
			ans = (val - 32) * 5 / 9;
			res.send({'valor' : ans});
		}
		else if (query['de'] == 'F' && query['para'] == 'K') {
			ans = (val - 32) * 5 / 9 + 273.15;
			res.send({'valor' : ans});
		}
		else if (query['de'] == 'K' && query['para'] == 'C') {
			ans = val - 273.15;
			res.send({'valor' : ans});
		}
		else if (query['de'] == 'K' && query['para'] == 'F') {
			ans = (val - 273.15) * 9 / 5 + 32;
			res.send({'valor' : ans});
		}
		else {
			res.sendStatus(400);
		}
	}
});

var server = app.listen(3000, function() {

});