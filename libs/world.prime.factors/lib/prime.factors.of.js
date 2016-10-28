primeFactorsOf = function(number) {
	var factors = [];
	
	while (number%2==0){
		number = number/2
		factors.push(2)
	}
	return factors;
};

module.exports = primeFactorsOf;