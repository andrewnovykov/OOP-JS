class Vehicle {
	start(){
		console.log('starting Vehicle' );
	}

	static getCompanyName() {
		console.log('Company NAme' );
	}
}

class Drone extends Vehicle {

}

class Car extends Vehicle {
	start(){
		super.start();
		console.log('starting Car' );
	}


	static getCompanyName() {
		super.getCompanyName();
		console.log('Company Other NAme' );
	}
}

let car = new Car('123');

//console.log(car instanceof Vehicle);

car.start();

Car.getCompanyName();

console.log( );