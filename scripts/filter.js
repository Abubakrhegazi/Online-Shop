const filterProducts = (category) => {
    const products = document.querySelectorAll('.pro');

    products.forEach((product) => {
        if (category === 'all' || product.querySelector('h5').textContent.toLowerCase() === category) {
            product.style.display = 'block';
        } else {
            product.style.display = 'none';
        }
    });
};

document.getElementById('filter-buttons').addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        const category = event.target.textContent.toLowerCase();

        filterProducts(category);
    }
});
