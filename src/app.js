class Drone {
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

	static getCompany(){
		console.log('drone ' + this.id + ' made in ' + this.name);
	}

	fly() {
		console.log('drone ' + this.name + ' is flying');
	}

}

Drone.maxHeight = 2000; //static property

let drone = new Drone('123', 'RUBUS');
let drone2 = new Drone('456', 'BRABUS');

drone.fly();
drone2.fly();

console.log( drone.id + ' ' + drone.name  );
console.log( Drone.maxHeight );
// console.log( drone instanceof Drone );