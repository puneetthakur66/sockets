var socket = io();
socket.on('connect', function () {
	console.log('connected to Socket.io server');
});

socket.on('message', function (message) {
	console.log("New Message Recieved: " + message.text);
	$('div.message').append('<p>' + message.text + '</p>');
});

$form = $('#message-form');

$form.on('submit', function (event) {
	event.preventDefault();

	var $message = $form.find('input[name="message"]');

	socket.emit('message', {
		text: $message.val()
	});

	$message.val("");
}); 