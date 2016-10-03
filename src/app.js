class Drone {
	constructor(id, name){
		this.id = id;
		this.name = name;
	}

}

let drone = new Drone('123', 'RUBUS');

console.log( drone.id + ' ' + drone.name  );
// console.log( typeof drone );
// console.log( drone instanceof Drone );