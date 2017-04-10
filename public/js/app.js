var name = getQueryVariable('name') || 'Anonymous';
var room = getQueryVariable('room');

console.log(name);
console.log(room);

var socket = io();
socket.on('connect', function () {
	console.log('connected to Socket.io server');
});

socket.on('message', function (message) {
	var momentTimestamp = moment.utc(message.timestamp);
	console.log("New Message Recieved: " + message.text);

	$message = $('div.message');

	$message.append('<p><strong>' + message.name + ' ' + momentTimestamp.local().format("h:mm a") + '</strong></p>');
	$message.append('<p>'+ message.text +'</p>');
	// $('div.message').append('<p><strong>' + momentTimestamp.local().format("h:mm a") + '</strong> ' + message.text + '</p>');
});

$form = $('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name="message"]');

	socket.emit('message', {
		name: name,
		text: $message.val()
	});

	$message.val("");
}); 