const toggleSwitch = document.querySelector(
    '.switch input[type="checkbox"]'
  );
  const header = document.querySelector('header');
  const container = document.querySelector('.container');

  function switchTheme(e) {
    if (e.target.checked) {
      document.body.classList.add("dark");
      header.classList.add("dark");
      container.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      header.classList.remove("dark");
      container.classList.remove("dark");
    }
  }

  toggleSwitch.addEventListener("change", switchTheme, false);

function menuToggle()
{
const toggleMenu = document.querySelector('.toggleMenu');
const navigation = document.querySelector('.navigation');
toggleMenu.classList.toggle('active')
navigation.classList.toggle('active')
}