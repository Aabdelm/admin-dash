let sub_noti = document.querySelector(".sub-noti");
let bell = sub_noti.querySelector('svg');
bell.addEventListener('click', ()=>{
   bell.classList.contains('clicked') 
   ? bell.classList.remove('clicked'):
   bell.classList.add('clicked');
});