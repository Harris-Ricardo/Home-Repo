// Get the chat form and chat window elements
const chatForm = document.getElementById('chat-form');
const chatWindow = document.getElementById('chat-window');

// Add event listener for form submission
chatForm.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the message input value
  const messageInput = document.getElementById('message-input');
  const message = messageInput.value.trim();

  if (message !== '') {
    // Create a new chat bubble element for the user's message
    const userBubble = document.createElement('p');
    userBubble.classList.add('user-bubble');
    userBubble.textContent = message;
    chatWindow.appendChild(userBubble);

    // Clear the message input
    messageInput.value = '';

    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;

    // Simulate a response from the business
    setTimeout(() => {
      const businessBubble = document.createElement('p');
      businessBubble.classList.add('business-bubble');
      businessBubble.textContent = 'Thank you for your message! We will get back to you soon.';
      chatWindow.appendChild(businessBubble);

      // Scroll to the bottom of the chat window after the response
      chatWindow.scrollTop = chatWindow.scrollHeight;
    }, 1000);
  }
});

//message
function sendMessage(message) {
  fetch('/path/to/server/script', {
  
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message: message }),
  })
    .then(response => {
      if (response.ok) {
        // Message sent successfully
        showAlert();
      } else {
        // Handle error
        console.error('Error sending message:', response.statusText);
      }
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
}

// ads
// window.addEventListener('DOMContentLoaded', function() {
//   var adStrip = document.getElementById('adStrip');
//   var ads = adStrip.getElementsByClassName('ad');
//   var currentAdIndex = 0;
//   var adInterval = 3000; // Change this value to adjust the ad rotation interval (in milliseconds)

//   function rotateAds() {
//       ads[currentAdIndex].style.display = 'none';
//       currentAdIndex = (currentAdIndex + 1) % ads.length;
//       ads[currentAdIndex].style.display = 'inline-block';
//   }

//   // Initial ad display
//   ads[currentAdIndex].style.display = 'inline-block';

//   // Start rotating ads
//   setInterval(rotateAds, adInterval);
// });