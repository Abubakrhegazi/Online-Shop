let products = [];
function addProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let type = document.getElementById('type').value;
    let image = document.getElementById('image').value;

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
    }
}
