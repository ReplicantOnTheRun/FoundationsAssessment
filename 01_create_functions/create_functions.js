var createFunctions = function(num){
	var funcArray = [];

	for(var i = 0; i<= num; i++){
		
		//num times we want to make a function, set a prop, 
		//and have it return its property when it is called.
		var myFunc = function(){

			return myFunc.loc;
		} 
		myFunc.loc = i;
		funcArray.push(myFunc);
	}

	return funcArray;

}


