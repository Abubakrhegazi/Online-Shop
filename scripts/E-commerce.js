
// var i = 0;
// var images = [];
// var time = 1000;

// images[0] = "imgs/bgs/back1.jpg";
// images[1] = "imgs/bgs/back2.jpg";
// images[2] = "imgs/products/f3.jpg";

// function changeImg() {
//     document.getElementById('slideshow').src = images[i];
//     if (i < images.length - 1) {
//         i++;
//     } else {
//         i = 0;
//     }
//     setTimeout(changeImg, time);
// }

// function prevImage() {
//     if (i === 0) {
//         i = images.length - 1;
//     } else {
//         i--;
//     }
//     document.getElementById('slideshow').src = images[i];
// }

// function nextImage() {
//     if (i === images.length - 1) {
//         i = 0;
//     } else {
//         i++;
//     }
//     document.getElementById('slideshow').src = images[i];
// }

// window.onload = changeImg;
document.addEventListener('DOMContentLoaded', function() {
    window.alert('tes');
});


function addProductToCart(buttonElement) {
    let prodID = buttonElement.parentNode.id;
    window.alert(prodID);
}