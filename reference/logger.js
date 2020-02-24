
const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        this.emit('message', {id: uuid.v4(), msg})
    }
}

const logger = new Logger();

logger.on('message', (data) => {
    console.log(`Called listener and ID: ${data.id} Message: ${data.msg}`);
});

logger.log('Hello, World');
logger.log('Hello, Trent');