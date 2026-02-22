 const items = document.querySelectorAll('.navigation li');
const indicator = document.querySelector('.indicator');
const circleIcon = document.querySelector('.circle-icon');  

items.forEach((item, index) => {
  item.addEventListener('click', () => {

    document.querySelector('.navigation li.active')
      .classList.remove('active');
    item.classList.add('active');

  
    indicator.style.left = `${index * 80 + 10}px`;

    
    circleIcon.innerHTML = item.querySelector('.icon').innerHTML;
  });
});

 
indicator.style.left = "10px";
circleIcon.innerHTML =
  document.querySelector('.navigation li.active .icon').innerHTML;