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