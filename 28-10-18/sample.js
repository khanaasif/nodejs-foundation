

var human = function(name){

	var that = {};

	that.name = name || '';
	that.gender = '';
	that.planetOfBirth = 'Earth';

	that.sayGender = function(){
		alert(that.name + "says my gender is " + that.gender);
	}

	that.sayPlanet = function(){
		alert(that.name + "was born on " + that.planetOfBirth);
	}

	return that;
}

var male = function(name){
	var that = human(name);
	that.gender = 'Male';
	return that;
}

var female =  function(name){
	var that = human(name);
	that.gender = 'Female';
	return that;
}










