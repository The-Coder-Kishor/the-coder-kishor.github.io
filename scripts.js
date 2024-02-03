const toggleSwitch = document.querySelector(
    '.switch input[type="checkbox"]'
  );

  function enableDarkMode() {
    document.body.classList.add('dark');
    localStorage.setItem('darkMode', 'true');
  }
  
  function disableDarkMode() {
    document.body.classList.remove('dark');
    localStorage.setItem('darkMode', 'false');
  }

  function switchTheme(e) {
    if (toggleSwitch.checked) {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  }
  const storedDarkMode = localStorage.getItem('darkMode');
  const isDarkMode = storedDarkMode === 'true' || (!storedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);

  toggleSwitch.checked = isDarkMode; 
  switchTheme();
  toggleSwitch.addEventListener("change", switchTheme);

function menuToggle()
{
const toggleMenu = document.querySelector('.toggleMenu');
const navigation = document.querySelector('.navigation');
toggleMenu.classList.toggle('active')
navigation.classList.toggle('active')
}

document.addEventListener('DOMContentLoaded', function () {
  const outputDiv = document.getElementById('output');
  const promptDiv = document.getElementById('prompt');
  const asciiArtDiv = document.getElementById('ascii_art');

  // Check if the animation has already played in this session
  const animationPlayed = sessionStorage.getItem('animationPlayed');

  if (!animationPlayed) {
      // Helper function for typing effect
      function typeMessage(message, element, delay) {
          let index = 0;
          const typingInterval = 50; // Adjust typing speed as needed

          function typeCharacter() {
              if (index < message.length) {
                  element.innerHTML += message.charAt(index);
                  index++;
                  setTimeout(typeCharacter, typingInterval);
              } else {
                  // Append a new line after each message
                  element.innerHTML += '<br>';
              }
          }

          setTimeout(() => {
              typeCharacter();
          }, delay);
      }

      // Array of messages with delays
      const messages = [
          { text: 'Testing, testing...', target: outputDiv, delay: 1000 },
          { text: 'Hello, welcome to my website!', target: outputDiv, delay: 3000 },
          { text: 'Feel free to explore and learn more about me.', target: outputDiv, delay: 5000 },
          { text: 'ASCII Art', target: asciiArtDiv, delay: 7000 },
          { text: '>', target: promptDiv, delay: 9000 }
      ];

      // Display messages
      messages.forEach(message => {
          typeMessage(message.text, message.target, message.delay);
      });

      // Set a flag in sessionStorage indicating that the animation has played
      sessionStorage.setItem('animationPlayed', 'true');
  } else {
      // If the animation has already played, display the final state immediately
      outputDiv.innerHTML = 'Testing, testing...<br>Hello, welcome to my website!<br>Feel free to explore and learn more about me.';
      asciiArtDiv.textContent = 'ASCII Art';
      promptDiv.textContent = '>';
  }

  // // Log messages for debugging
  // console.log(outputDiv);
  // console.log(promptDiv);
  // console.log(asciiArtDiv);
});

