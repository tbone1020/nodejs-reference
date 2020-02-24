/* 
This is something that you will have to look into and study more. 
Don't repeat what you did with Angular!!! */

const EventEmitter = require('events');

class Emitter extends EventEmitter { }

// Init Object
const myEmit = new Emitter();

// Event Listener
myEmit.on('event', () => {
    console.log("Event was fired");
});

// Init Event
myEmit.emit('event');