const toggleSwitch = document.querySelector(
  '.switch input[type="checkbox"]'
);
const toggleMenu = document.querySelector('.toggleMenu');
const githubIcon = document.querySelector('.github-icon');
const gitlabIcon = document.querySelector('.gitlab-icon');
const redditIcon = document.querySelector('.reddit-icon');
const linkedinIcon = document.querySelector('.linkedin-icon');
const facebookIcon = document.querySelector('.facebook-icon');
const twitterIcon = document.querySelector('.twitter-icon');
const instagramIcon = document.querySelector('.instagram-icon');
const mailIcon = document.querySelector('.mail-icon');

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
    githubIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/github.png';
    gitlabIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/gitlab.png';
    redditIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/reddit.png';
    linkedinIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/linkedin.png';
    facebookIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/facebook-new.png';
    twitterIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/twitterx--v1.png';
    instagramIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/instagram-new.png';
    mailIcon.src = 'https://img.icons8.com/ios-filled/50/FFFFFF/mail.png'

  } else {
    githubIcon.src = 'https://img.icons8.com/ios-filled/50/000000/github.png';
    gitlabIcon.src = 'https://img.icons8.com/ios-filled/50/000000/gitlab.png';
    redditIcon.src = 'https://img.icons8.com/ios-filled/50/000000/reddit.png';
    linkedinIcon.src = 'https://img.icons8.com/ios-filled/50/000000/linkedin.png';
    facebookIcon.src = 'https://img.icons8.com/ios-filled/50/000000/facebook-new.png';
    twitterIcon.src = 'https://img.icons8.com/ios-filled/50/000000/twitterx--v1.png';
    instagramIcon.src = 'https://img.icons8.com/ios-filled/50/000000/instagram-new.png';
    mailIcon.src = 'https://img.icons8.com/ios-filled/50/000000/mail.png'
    disableDarkMode();
  }
}
const storedDarkMode = localStorage.getItem('darkMode');
const isDarkMode = storedDarkMode === 'true' || (!storedDarkMode && window.matchMedia('(prefers-color-scheme: dark)').matches);

toggleSwitch.checked = isDarkMode;
switchTheme();
toggleSwitch.addEventListener("change", switchTheme);

function menuToggle() {
  const toggleMenu = document.querySelector('.toggleMenu');
  const navigation = document.querySelector('.navigation');
  toggleMenu.classList.toggle('active')
  navigation.classList.toggle('active')
}