function sendMessage() {
  var userMessage = document.getElementById('user-message').value;
  document.getElementById('chat-display').innerHTML += '<li class="chat outgoing"><p class="user-response">' + userMessage + '</p></li>';
  document.getElementById('user-message').value = '';

  // Send the message to the server
  fetch('/ask', {
      method: 'POST',
      body: new URLSearchParams({ 'user_message': userMessage }),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  .then(response => response.json())
  .then(data => {
      var botResponse = data.bot_response;
      document.getElementById('chat-display').innerHTML += '<li class="chat incoming"><p class="bot-response">Bot: ' + botResponse + '</p></li>';
  });
}