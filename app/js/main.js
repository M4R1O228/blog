//**меню на мобильных устройствах
let loginBtn = document.querySelector('.login__button');
let loginList = document.querySelector('.login__list');
let login = document.querySelector('.login');

loginBtn.addEventListener('click', (event) =>{
	loginList.classList.toggle('active');
	loginBtn.classList.toggle('active');
	event.preventDefault();
});
//**












