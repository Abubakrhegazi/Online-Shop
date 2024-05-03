document.getElementById('addProductForm').addEventListener('submit', function(event) {
    event.preventDefault();
    // Handle form submission (e.g., send data to server)
});
// Other JavaScript for managing products


let products = [];
function addProduct() {
    let name = document.getElementById('name').value;
    let price = document.getElementById('price').value;
    let type = document.getElementById('type').value;
    let image = document.getElementById('image').value;
    let product = { name, price, type, image };
    products.push(product);

    console.log(products); // For testing, you can remove this line in production
}