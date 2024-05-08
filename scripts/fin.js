document.addEventListener('DOMContentLoaded', function() {
    // Function to filter products based on category
    function filterProducts(category) {
        console.log("Filtering by category: " + category);
        // Get all product elements
        var products = document.querySelectorAll('.pro');

        // Loop through each product
        products.forEach(function(product) {
            // Get the category of the product (text inside <h5> tag)
            var productCategory = product.querySelector('h5').innerText.toLowerCase();

            // If the product category matches the selected category or the category is "all", display the product
            if (productCategory === category || category === 'all') {
                product.style.display = 'block'; // Show the product
            } else {
                product.style.display = 'none'; // Hide the product
            }
        });
    }

    // Add event listeners to category links
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior

            // Get the category from the href attribute
            var category = this.innerText.toLowerCase();

            // Filter products based on the selected category
            filterProducts(category);
        });
    });

    // Search functionality
    document.querySelector('.btn_search').addEventListener('click', function() {
        var searchTerm = document.querySelector('.search input').value.toLowerCase();

        // Get all product elements
        var products = document.querySelectorAll('.pro');

        // Loop through each product
        products.forEach(function(product) {
            // Get the title of the product
            var title = product.querySelector('h5').innerText.toLowerCase();
            // If the title contains the search term, display the product, otherwise hide it
            if (title.includes(searchTerm) || searchTerm === '') {
                product.style.display = 'block'; // Show the product
            } else {
                product.style.display = 'none'; // Hide the product
            }
        });
    });
});
