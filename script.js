const triggerSpan = document.getElementById('trigger');
const easterEggImg = document.getElementById('easter_egg_img');

triggerSpan.addEventListener('mouseenter', () => {
  easterEggImg.classList.add('animation');
});

triggerSpan.addEventListener('mouseleave', () => {
  easterEggImg.classList.remove('animation');
});
