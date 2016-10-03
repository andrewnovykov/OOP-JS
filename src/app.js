class Vehicle {
	constructor(licenceNum){
		this.licenceNum = licenceNum;
	}
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
	constructor(licenceNum){
		super(licenceNum);
		
	}
}

let car = new Car('123');

console.log(car instanceof Vehicle);

console.log(car.licenceNum);