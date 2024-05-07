let products = [];
function addProduct() {

    let formm = document.getElementById('addProductForm');
    let name = formm.name.value;
    let price = formm.price.value;
    let type = formm.type.value;
    let image = formm.image.value;

    if (name === '') {
        document.getElementById('name-err').innerHTML = "Please fill name field";
    }
    else {
        document.getElementById('name-err').innerHTML = "";
    }
    if (price === '') {
        document.getElementById('price-err').innerHTML = "Please fill in price field";
    }
    else {
        document.getElementById('price-err').innerHTML = "";
    }
    if (type === '') {
        document.getElementById('type-err').innerHTML = "Please fill in type field";
    }
    else {
        document.getElementById('type-err').innerHTML = "";
    }
    if (image === '') {
        document.getElementById('image-err').innerHTML = "Please select an image";
    }
    else {
        document.getElementById('image-err').innerHTML = "";
    }
    if (!(name === '' || price === '' || type === '' || image === '')) {
        document.getElementById('error').innerHTML = "";
        let product = { name, price, type, image };
        products.push(product);
        window.alert('Product added successfully!');
    }

}


function editProduct() {

    let formm = document.getElementById('editProductForm');
    let name = formm.name.value;
    let price = formm.price.value;
    let type = formm.type.value;
    let image = formm.image.value;

    if (name === '') {
        formm.getElementById('name-err').innerHTML = "Please fill name field";
    }
    else {
        formm.getElementById('name-err').innerHTML = "";
    }
    if (price === '') {
        formm.getElementById('price-err').innerHTML = "Please fill in price field";
    }
    else {
        formm.getElementById('price-err').innerHTML = "";
    }
    if (type === '') {
        document.getElementById('type-err').innerHTML = "Please fill in type field";
    }
    else {
        document.getElementById('type-err').innerHTML = "";
    }
    if (image === '') {
        document.getElementById('image-err').innerHTML = "Please select an image";
    }
    else {
        document.getElementById('image-err').innerHTML = "";
    }
    if (!(name === '' || price === '' || type === '' || image === '')) {
        document.getElementById('error').innerHTML = "";
        let product = { name, price, type, image };
        products.push(product);
        window.alert('Product added successfully!');
    }

}



