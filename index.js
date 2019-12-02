const events = require(`events`);
const util = require('util');

const myEmit = new events.EventEmitter();

myEmit.on(`someEvent`, (text) => {
    console.log(text);
});

//myEmit.emit(`someEvent`, `Event happend`);

var Cars = function(model){
    this.model = model;
}

util.inherits(Cars, events.EventEmitter);

const bmw = new Cars(`BMW`);
const audi = new Cars(`Audi`);
const volvo = new Cars(`volvo`);

let cars = [bmw, audi, volvo];
cars.forEach((car) => {
    car.on(`speed`, (text) => {
        console.log(`${car.model} speed is - ${text}`);
    })
})

bmw.emit('speed', '228.0 km');
console.log(cars);