import $ from 'jquery';
import {Car} from './classes/car.js'; 
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';

import {Button} from './ui/button.js';
import {Image} from './ui/image.js';
import {TitleBar} from './ui/title-bar.js';
import {DataTable} from './ui/data-table.js';


let headers = "License Make Model Miles".split(' ');

let dataService = new FleetDataService( );
dataService.loadData(fleet);

let dt = new DataTable(headers , dataService.cars);
dt.appendToElement($('body'));




// let b = new Button('Click ME');
// b.appendToElement($('body'));


// let i = new Image('	http://texha.ru/img/equipment/smal/robot.jpg ');
// i.appendToElement($('body'));

// let tb = new TitleBar('	My Title! ');
// tb.addLink('home', '/');
// tb.addLink('car', '/');
// tb.addLink('drone', '/');


// tb.appendToElement($('body'));




console.log( ); 

