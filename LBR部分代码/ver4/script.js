let moon = document.getElementById('moon');
let left1 = document.getElementById('left1');
let left2 = document.getElementById('left2');
let right1 = document.getElementById('right1');
let right2 = document.getElementById('right2');

window.onload = function() 
{
  window.scrollTo(0, 0);
}

window.addEventListener('scroll', function () 
{
  let value = window.scrollY;
  if (value < 1000) 
  { 
    moon.style.marginTop = value * -2+ 'px';
    left1.style.left = value * -3.5 + 'px';
    left2.style.left = value * -3.5 + 'px';
    right1.style.left = value * 3.5 + 'px';
    right2.style.left = value * 4 + 'px';
  }
  
});

