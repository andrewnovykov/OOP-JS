class Drone {
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

}

Drone.maxHeight = 2000; //static property

let drone = new Drone('123', 'RUBUS');
let drone2 = new Drone('456', 'BRABUS');

console.log( drone.id + ' ' + drone.name  );
console.log( Drone.maxHeight );
// console.log( drone instanceof Drone );