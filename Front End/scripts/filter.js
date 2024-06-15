document.addEventListener('DOMContentLoaded', function () {
    function showAllProducts() {
        var products = document.querySelectorAll('.pro');
        products.forEach(function (product) {
            product.style.display = 'block';
        });
    }
 function filterProducts(category) {
        var products = document.querySelectorAll('.pro');
        products.forEach(function (product) {
            var productCategory = product.querySelector('h5').innerText.toLowerCase();
                if (productCategory === category || category === 'all categories') {
                    product.style.display = 'block';
                } else {
                    product.style.display = 'none';
                }
        });
    } 
    //category
    document.getElementById('all-cats').addEventListener('click', function () {
        showAllProducts();
    });

    document.querySelectorAll('.cat-list button').forEach(function (button) {
        button.addEventListener('click', function () {
            var category = this.innerText.toLowerCase();
            filterProducts(category);
        });
    });
});
