const EventEmitter = require('events');

// Create a custom event emitter
const myEmitter = new EventEmitter();

// Define an event listener
myEmitter.on('customEvent', (arg) => {
  console.log('Event occurred with argument:', arg);
});

// Emit the custom event
myEmitter.emit('customEvent', 'Sample Argument');
