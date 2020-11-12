
var validateEmailAddress = function(addrValue){
	var valid = true;
	
	var ex = /\S+@\S+\.\S+/;
	
	valid = ex.test(addrValue);
	
	return valid;
}

module.exports = validateEmailAddress;