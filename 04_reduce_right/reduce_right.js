var reduceRight= function(array, start, func){
	var current = start;
	for(var i=array.length-1; i >=0; i--){
		current = func(current, array[i])
	};
	return current;
}

