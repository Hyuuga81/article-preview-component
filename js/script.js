const share = document.querySelector('.share');
const shareDark = document.querySelector('.share-dark');
const overlay = document.querySelector('.overlay');

const handleClick = () => {
    if (overlay.classList.contains('hide')) {
        overlay.classList.remove('hide');
        share.style.backgroundColor = "#48556A";
        share.style.color = "#FFF";
    } else {
        overlay.classList.add('hide');
        share.style.backgroundColor = "#ECF2F8";
        share.style.color = "#48556A";
    }
}

const handleDarkClick = () => overlay.classList.add('hide');
share.addEventListener('click', handleClick);
shareDark.addEventListener('click', handleDarkClick);