 class Vehicle {
	constructor (make, model, year){
		this.make = make,
		this.model = model,
		this.year = year
	}
	honk(){
		return "Beep"
	}
	toString(){
		return `The vehicle is a ${this.year} ${this.make} ${this.model}`
	}
 }

class Car extends Vehicle {
	constructor (make, model, year){
		super(make, model, year);
		this.numWheels = 4
	}
}

class Motorcycle extends Vehicle{
	constructor(make, model, year){
		super(make, model, year);
		this.numWheels = 2;
	}
	revEngine(){
		return "VROOM!!!"
	}
}

class Garage {
	constructor(capacity){
		this.capacity = capacity
		this.vehicles = []
	}
	add(vehicle){
		if(this.vehicles.length >= this.capacity){
			return "Sorry, we're full"
		}
		if (!(vehicle instanceof Vehicle)) {
			return "Only vehicles are allowed in here!"
		}
		this.vehicles.push(vehicle);
		return "Vehicle Added!"
	}
}
