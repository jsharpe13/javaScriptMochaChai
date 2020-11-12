
var validatePhoneNumber = function(Numvalue){
	var valid = true;
	Numvalue += "";
	if(Numvalue.trim() == "" || Numvalue == 'null' || Numvalue == 'undefined'){
		valid = false;
	}
	else
	{
		Numvalue = Numvalue.replace(' ', '');
		Numvalue= Numvalue.replace('(', '');
		Numvalue= Numvalue.replace(')', '');
		Numvalue = Numvalue.replace('-', '');
		Numvalue = Numvalue.replace('-', '');
		Numvalue = Numvalue.replace(' ', '');
		Numvalue = Numvalue.replace('/', '');
		Numvalue = Numvalue.replace('/', '');
		
		if(/^\d+$/.test(Numvalue) == false)
		{
			valid = false;
		}
	}
	return valid;
}

module.exports = validatePhoneNumber;