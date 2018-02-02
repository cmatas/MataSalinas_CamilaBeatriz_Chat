(() => {
  const socket = io();

  let messageList = document.querySelector('url'),
      chatForm = document.querySelector('form'),
      chatMessage = chatForm.querySelector('.message');

  function appendMessage(msg) {
    debugger;
  }

  function appendDiscMessage(msg) {
    debugger;
  }

  function handleSendMessage(e) {
    e.preventDefault(); // block default behaviour 
    debugger;
  }

  chatForm.addEventListener('submit', handleSendMessage, false);
  socket.addEventListener('chat message', appendMessage, false);
  socket.addEventListener('disconnect message', appendDiscMessage, false);
})();
