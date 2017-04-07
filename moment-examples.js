var moment = require('moment');
var now = moment();

console.log(now.valueOf());

var timestamp = 1491559819293;

var timestampMoment = moment.utc(timestamp);

console.log(timestampMoment.local().format("h:mm A"));

// console.log(now.format());

// now.subtract('1', 'year');

// console.log(now.format("MMM Do YYYY, h:mma"));