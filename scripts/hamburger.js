const menu = document.querySelector('.hamburger');
const list = document.querySelector('.navList__list');

menu.addEventListener('click', () => {
	menu.classList.toggle('hamburger--active');
	list.classList.toggle('navList__list--active');
});