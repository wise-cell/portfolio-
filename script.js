const menuicon = document.querySelector('#menu-icon');
const navlinks = document.querySelector('.nav-links');

menuicon.onclick = () => {
    navlinks.classList.toggle('active')
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.visit-btn').onclick = function() {
      window.open('https://github.com/wise-cell', '_blank');
    };
  });
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.btn').onclick = function() {
      window.location.href = 'https://www.linkedin.com/in/elvis-tchato-3330812a2/';
    };
  });
  
  