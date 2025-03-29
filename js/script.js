  // Mobile Menu

document.addEventListener('DOMContentLoaded', function() {
  const toggleButton =document.querySelector('.navbar__mobile-menu-toggle');
  const mobileMenu =document.querySelector('.navbar__mobile-menu-items');

  toggleButton.addEventListener('click', function () {
    mobileMenu.classList.toggle('active')
  });
// video modal 
const modal = document.querySelector('#videoModal');
const videoButton = document.querySelector('.preview__video-button');
const closeButton = document.querySelector('.modal__close-button');
const videoPlayer = document.getElementById('videoPlayer')

// Open modal when vclick
videoButton.addEventListener('click', function () {
  //show modal
  modal.style.display = 'block';

  // replace the src attribute with the video url
  videoPlayer.src = 'https://www.youtube.com/embed/5IHweR3PPPQ?si=44e9_E-Sa-F-HGtu';


    // close modal
closeButton.addEventListener('click', function () {
  modal.style.display = 'none';
  videoPlayer.src = '';
});

//close modal when clicking outside the box
window.addEventListener('click', function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    videoPlayer.src = '';
  }
})
});
});

// Navigation background on scroll
window.addEventListener('scroll', function () {
  const navbar = this.document.querySelector('.navbar');

  if (window.scrollY > 0) {
    navbar.classList.add('navbar--scroll');
  } else {
    navbar.classList.remove('navbar--scroll');
  }
});