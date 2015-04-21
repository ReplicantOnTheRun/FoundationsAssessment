var createArgumentMap = function(func){
	var argObj = {};
	//argObj["a0"] = func;
    for(var i=0; i<arguments.length; i++){
    	argObj["a"+i] = arguments[i];
    }
	return argObj;
}
var keyAdder = function(obj){
	var sum = 0;

	for(key in this){
		if(this.hasOwnProperty(key) && !isNaN(this[key])){
		    sum += this[key];
		}
		

	}
	return sum;
}