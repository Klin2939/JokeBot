var firstInteractionDone = false; // Flag to track whether the user has gone through the first interaction.
var jokeInteractionDone = false; // Flag to track whether the user has completed the joke interaction.
var lukeInteractionDone = false; // Flag to track whether the user has completed the luke interaction.
var finalInteractionDone = false; // Flag to track whether the user has completed the final interaction.


// This waits for the user to click the Submit button or press the Enter key.
document.getElementById('messageInput').addEventListener('keypress', function(e) {
  if (e.keyCode === 13) {
    handleUserInput();
  }
});

document.getElementById('submitButton').addEventListener('click', function() {
  handleUserInput();
});

function handleUserInput() {
  // This takes whatever the user entered and saves it as 'messageInput'.
  var messageInputValue = document.getElementById('messageInput').value;

  messageInputValue = messageInputValue.toLowerCase();

  if (!firstInteractionDone) {
    // The user hasn't gone through the first interaction yet.
    if (messageInputValue.includes('hello')) {
      document.getElementById('TalkbotResponse').innerHTML = 'Hi! How can I assist you?';
      firstInteractionDone = true; // Set the flag to true to unlock the rest of the conversation.
    } else {
      document.getElementById('TalkbotResponse').innerHTML = 'Please say hello first to start the conversation.';
    }
  } else if (!jokeInteractionDone && firstInteractionDone) {
    // The user has gone through the first interaction, but hasn't completed the joke interaction yet.
    if (messageInputValue.includes('joke')) {
      document.getElementById('TalkbotResponse').innerHTML = 'knock knock';
      jokeInteractionDone = true; // Set the flag to true to unlock the next interaction.
    } else {
      document.getElementById('TalkbotResponse').innerHTML = 'Please say "joke" to continue.';
    }
  } else if (!lukeInteractionDone && jokeInteractionDone) {
    // The user has completed the joke interaction, but hasn't completed the luke interaction yet.
    if (messageInputValue.includes('there')) {
      document.getElementById('TalkbotResponse').innerHTML = 'Luke';
      lukeInteractionDone = true; // Set the flag to true to unlock the next interaction.
    } else {
      document.getElementById('TalkbotResponse').innerHTML = 'Please ask "whos there" to continue.';
    }
    } else if (!finalInteractionDone && lukeInteractionDone) {
// The user has completed the luke interaction, but hasn't completed the final interaction yet.
if (messageInputValue.includes('luke who')) {
  document.getElementById('TalkbotResponse').innerHTML = 'Luke through the peep hole and find out.';
  finalInteractionDone = true; // Set the flag to true to unlock the next interaction.
} else {
  document.getElementById('TalkbotResponse').innerHTML = 'Please ask "luke who" to continue.';
}
}
  // This clears the `messageInput` text box.
  document.getElementById('messageInput').value = '';
}