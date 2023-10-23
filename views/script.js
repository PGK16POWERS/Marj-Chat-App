const button = document.querySelector("button");
const socket = io();

button.addEventListener("click", () => {
    const message = document.querySelector('#message').value; // Corrected the property to 'value'
    socket.emit('chat message', message);
    document.querySelector('#message').value = '';
});

socket.on('chat message', (message) => {
    const li = document.createElement('li');
    li.textContent = message;
    document.querySelector('#messages').appendChild(li); // Corrected the target element to 'messages'
});