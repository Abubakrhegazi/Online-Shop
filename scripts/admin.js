let products = [];

function addProduct() {
    let form = document.getElementById('addProductForm');
    let name = form.name.value;
    let price = form.price.value;
    let type = form.type.value;
    let image = form.file.value;

    if (name === '') {
        document.getElementById('nameAdd-err').innerHTML = "Please fill name field";
    }
    else {
        document.getElementById('nameAdd-err').innerHTML = "";
    }
    if (price === '') {
        document.getElementById('priceAdd-err').innerHTML = "Please fill in price field";
    }
    else {
        document.getElementById('priceAdd-err').innerHTML = "";
    }
    if (type === '') {
        document.getElementById('typeAdd-err').innerHTML = "Please fill in type field";
    }
    else {
        document.getElementById('typeAdd-err').innerHTML = "";
    }
    if (image === '') {
        document.getElementById('imageAdd-err').innerHTML = "Please select an image";
    }
    else {
        document.getElementById('imageAdd-err').innerHTML = "";
    }
    if (!(name === '' || price === '' || type === '' || image === '')) {
        document.getElementById('error').innerHTML = "";
        let product = { name, price, type, image };
        products.push(product);
        window.alert('Product added successfully!');
    }
}

function editProduct() {
    let form = document.getElementById('editProductForm');
    let ID = form.ID.value;
    let name = form.name.value;
    let price = form.price.value;
    let type = form.type.value;
    let image = form.file.value;

    if (ID === '') {
        document.getElementById('IDEdit-err').innerHTML = "Please fill ID field";
    }
    else {
        document.getElementById('IDEdit-err').innerHTML = "";
    }
    if (name === '') {
        document.getElementById('nameEdit-err').innerHTML = "Please fill name field";
    }
    else {
        document.getElementById('nameEdit-err').innerHTML = "";
    }
    if (price === '') {
        document.getElementById('priceEdit-err').innerHTML = "Please fill in price field";
    }
    else {
        document.getElementById('priceEdit-err').innerHTML = "";
    }
    if(price<0){
        document.getElementById('priceEdit-err').innerHTML = "Invalid value ";
    }
    if (type === '') {
        document.getElementById('typeEdit-err').innerHTML = "Please fill in type field";
    }
    else {
        document.getElementById('typeEdit-err').innerHTML = "";
    }
    if (image === '') {
        document.getElementById('imageEdit-err').innerHTML = "Please select an image";
       // Function to validate the file extension
function validateImageType(image) {
    // Check if the file name ends with ".jpg" or ".jpeg"
    return fileName.toLowerCase().endsWith(".jpg") || fileName.toLowerCase().endsWith(".jpeg");
}

    }
    else {
        document.getElementById('imageEdit-err').innerHTML = "";
    }
    if (!(ID === '' || name === '' || price === '' || type === '' || image === '')) {
        document.getElementById('error').innerHTML = "";
        window.alert('Product edited successfully!');
    }
}
