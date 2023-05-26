const share = document.querySelector('.share');
const shareDark = document.querySelector('.share-dark');
const overlay = document.querySelector('.overlay');

const handleClick = () => overlay.classList.remove('hide');
const handleDarkClick = () => overlay.classList.add('hide');
share.addEventListener('click', handleClick);
shareDark.addEventListener('click', handleDarkClick);