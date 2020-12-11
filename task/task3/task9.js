const btn_prev = document.querySelector('#photoGallery .photoGallery_buttons .prev');
const btn_next = document.querySelector('#photoGallery .photoGallery_buttons .next');

const images = document.querySelectorAll('#photoGallery .photoGallery_photos img');
let i = 0;

btn_prev.addEventListener('click', handlerPrev);
function handlerPrev () {
    images[i].style.display = 'none';
    i--;

    if(i < 0 ) {
        i = images.length -1;
    }
    images[i].style.display = 'block';
};

btn_next.addEventListener('click', handlerNext);
 function handlerNext () {
    images[i].style.display = 'none';
    i++;

    if(i >= images.length) {
        i = 0;
    }
    images[i].style.display = 'block';
};