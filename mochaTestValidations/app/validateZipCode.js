
var validateZipCode = function(ZipCode){
	var valid = true;
	
	ZipCode += "";
	
	var ex = /^[0-9]{5}(?:-[0-9]{4})?$/;
	
	valid = ex.test(ZipCode);
	
	return valid;
}

module.exports = validateZipCode;