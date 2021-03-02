const gallery = document.getElementsByClassName('gallery')[0];
// const galleryImages = document.querySelectorAll('.gallery-image')
const width = document.getElementsByClassName('gallery-image')[0].clientWidth;
console.log(width);
let counter = 0;

function next() {
    counter++;
    console.log(counter);
    gallery.style.transition = 'transform 0.4s ease-in-out';
    gallery.style.transform = 'translateX(' + (-width*counter) + 'px)';
    
}


function prev() {
    counter--;
    gallery.style.transition = 'transform 0.4s ease-in-out';
    gallery.style.transform = 'translateX(' + (-width*counter) + 'px)';
}

gallery.addEventListener('transitionend' , () => {
    if(counter == 4){
        gallery.style.transition = 'none';
        counter = 0;
        gallery.style.transform = 'translateX(' + (-width*counter) + 'px)';
    }
    if(counter == -1){
        gallery.style.transition = 'none';
        console.log(counter);
        counter = 3;
        gallery.style.transform = 'translateX(' + (-width*counter) + 'px)';
    }
});