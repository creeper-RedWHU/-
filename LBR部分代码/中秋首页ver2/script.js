let moon = document.getElementById('moon');
let left1 = document.getElementById('left1');
let left2 = document.getElementById('left2');
let right1 = document.getElementById('right1');
let right2 = document.getElementById('right2');

window.addEventListener('scroll', function () {
  let value = window.scrollY;
  moon.style.marginTop = value * 3 + 'px';
  left1.style.left = value * -2 + 'px';
  left2.style.left = value * -2 + 'px';
  right1.style.left = value * 2 + 'px';
  right2.style.left = value * 2 + 'px';
});
