var vowelsCount = function(str){
	var counter = 0;
	var letterArray = str.split("");
	letterArray.forEach(function(elem){
		if(elem.search(/[aeiou]/i) > -1){
			counter++;
		}
	});
	return counter;

}