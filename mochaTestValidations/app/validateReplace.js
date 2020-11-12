
var validateReplace = function(replaceString){
	var valid = true;
	
	replaceString += "";
	
	replaceString = replaceString.replace(/[<>\/']/g, '-');
	
	return replaceString;
}

module.exports = validateReplace;