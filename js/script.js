const share = document.querySelector('.share');
const shareDark = document.querySelector('.share-dark');
const overlay = document.querySelector('.overlay');

// const handleClick = () => {
    
// }

const handleDarkClick = () => {
    
}

// const handleDarkClick = () => overlay.classList.add('hide');

share.addEventListener('click', function() {
    overlay.classList.remove('hide');
    share.classList.add("hide");
    shareDark.classList.remove("hide");
    console.log('it works');
});

shareDark.addEventListener('click', function() {
    overlay.classList.add('hide');
    shareDark.classList.add('hide');
    share.classList.remove('hide');
});