var alternate = function(func){
	var times = 6;
	var increment = function(){
		if((times % 2) == 0){
			func();
		}
		times++;
	}
	return increment;
}