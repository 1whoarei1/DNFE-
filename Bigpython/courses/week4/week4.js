let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
     menu.classList.toggle('fa-times');
     header.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


const markAsDoneButton = document.getElementById('mark-as-done-button');
  markAsDoneButton.addEventListener('click', function () {
    markAsDoneButton.classList.add('button-done');
  });
