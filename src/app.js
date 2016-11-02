import {Car} from './classes/car.js'; 
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

let dataService = new FleetDataService();
dataService.loadData(fleet);


console.log( ); 

// let car = dataService.getCarByLicense('AT9900');
// console.log( car );

// let cars = dataService.getCarsSortedByLicense( );

// for (let license of cars) {
// 	console.log( license ); 
// }

let cars = dataService.filterCarsByMake('e');
console.log( cars );