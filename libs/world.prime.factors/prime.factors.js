var primeFactorsOf = require('./lib/prime.factors.of');

var primeFactors = function(request, response) {
	var res = {}
	var number = request.query['number'];

	var decomposition = primeFactorsOf(parseInt(number));
	response.setHeader('Content-Type', 'application/json');
	if (isNaN(number)) {
		res = {number: number, error:"not a number" }
	} else{
		res = {number: parseInt(number), decomposition: decomposition}
	}
	response.send(JSON.stringify(res));
};

module.exports = primeFactors;