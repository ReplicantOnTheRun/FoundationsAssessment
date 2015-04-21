function Vehicle(num, color){
	this.licensePlate = num;
	this.color = color;
}
Vehicle.prototype.beep = function(){
	return "BEEP, BEEP";
}
Vehicle.prototype.changeColor = function(color){
	this.color = color;
}

function Truck(num, color, trans){
    Vehicle.call(this, num, color);
    this.transmission = trans;
}
Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.constructor = Truck;