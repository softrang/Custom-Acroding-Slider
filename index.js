var slider = document.querySelectorAll('.slide');
var goNext = document.getElementById('next');
var goPrev = document.getElementById('prev');

function moveItems() {
    var item1 = document.querySelector('.item-1 img');
    var item2 = document.querySelector('.item-2 img');
    var item3 = document.querySelector('.item-3 img');
    var item4 = document.querySelector('.item-4 img');
    var item5 = document.querySelector('.item-5 img');
    var item6 = document.querySelector('.item-6 img');
    var item7 = document.querySelector('.item-7 img');

    if (item1) item1.parentElement.classList.replace('item-1', 'temp-item');
    if (item2) item2.parentElement.classList.replace('item-2', 'item-1');
    if (item3) item3.parentElement.classList.replace('item-3', 'item-2');
    if (item4) item4.parentElement.classList.replace('item-4', 'item-3');
    if (item5) item5.parentElement.classList.replace('item-5', 'item-4');
    if (item6) item6.parentElement.classList.replace('item-6', 'item-5');
    if (item7) item7.parentElement.classList.replace('item-7', 'item-6');
    if (document.querySelector('.temp-item')) document.querySelector('.temp-item').classList.replace('temp-item', 'item-7');
}

goNext.addEventListener('click', moveItems);

// Set interval to call moveItems every 3 seconds (3000 milliseconds)
setInterval(moveItems, 3000);



function moveItemss() {
    var item1 = document.querySelector('.item-1 img');
    var item2 = document.querySelector('.item-2 img');
    var item3 = document.querySelector('.item-3 img');
    var item4 = document.querySelector('.item-4 img');
    var item5 = document.querySelector('.item-5 img');
    var item6 = document.querySelector('.item-6 img');
    var item7 = document.querySelector('.item-7 img');

    if (item1) item1.parentElement.classList.replace('item-1', 'item-2');
    if (item2) item2.parentElement.classList.replace('item-2', 'item-3');
    if (item3) item3.parentElement.classList.replace('item-3', 'item-4');
    if (item4) item4.parentElement.classList.replace('item-4', 'item-5');
    if (item5) item5.parentElement.classList.replace('item-5', 'item-6');
    if (item6) item6.parentElement.classList.replace('item-6', 'temp-item');
    if (item7) item7.parentElement.classList.replace('item-7', 'item-1');
    if (document.querySelector('.temp-item')) document.querySelector('.temp-item').classList.replace('temp-item', 'item-7');
}

goPrev.addEventListener('click', moveItemss);

// Set interval to call moveItems every 3 seconds (3000 milliseconds)
//setInterval(moveItems, 3000);


















 //  slider[currentIndex].classList.add('active'); // Add active class to new slide
goPrev.addEventListener('click', () => {

    slider[currentIndex].classList.remove('active'); // Remove active class from current slide
    currentIndex = (currentIndex - 1 + slider.length) % slider.length; // Move to the previous slide, wrap around if at start
    slider[currentIndex].classList.add('active'); // Add active class to new slide
});
