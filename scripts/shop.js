// var class1=document.getElementsByClassName("product");
// var class2=document.getElementsByClassName("men");
// var class3=document.getElementsByClassName("watches");


// for (var i = 0; i < class1.length; i++) {
//     class1[i].addEventListener("click", m);
    
// }

// for (var i = 0; i < class2.length; i++) {
//     class2[i].addEventListener("click", mens);
// }

// for (var i = 0; i < class3.length; i++) {
//     class3[i].addEventListener("click", women);
// }


let products = [];

function addProductToShop(product) {
    let container = document.getElementById('.allproducts');

    let productDiv = document.createElement('div');
    productDiv.classList.add('product');
    let imgDiv = document.createElement('div');
    let img = document.createElement('img');
    img.src = product.image;
    imgDiv.appendChild(img);
    productDiv.appendChild(imgDiv);
    let nameP = document.createElement('p');
    nameP.textContent = product.name;
    productDiv.appendChild(nameP);
    let priceP = document.createElement('p');
    priceP.textContent = product.price + ' EGP';
    productDiv.appendChild(priceP);
    let typeH6 = document.createElement('h6');
    typeH6.textContent = product.type;
    productDiv.appendChild(typeH6);

    container.appendChild(productDiv);
}

function addProductsToShop() {
    for (let i = 0; i < products.length; i++) {
        addProductToShop(products[i]);
    }
}
window.addEventListener('load', addProductsToShop);


let slideIndex = 0;
let images = ["../imgs/slideshow/ss1.avif", "../imgs/slideshow/ss2.avif", "../imgs/slideshow/ss3.avif", "../imgs/slideshow/ss4.avif"];

function nextSlide() {
    let slide = document.getElementById("slide");
    let n = images.length;
    slide.src = images[(slideIndex++) % n];
}

function prevSlide() {
    let slide = document.getElementById("slide");
    if(slideIndex == -1){
        slideIndex = images.length -1;
    }
    slide.src = images[slideIndex--];
    
}

