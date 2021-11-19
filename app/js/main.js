//**меню на мобильных устройствах
let loginBtn = document.querySelector('.login__button');
let login = document.querySelector('.login__list');

loginBtn.addEventListener('click', (event) =>{
	event.preventDefault();
	login.classList.toggle('active');
	loginBtn.classList.toggle('active');
});
//**











