
const cartIcons = document.querySelectorAll('.cart');

cartIcons.forEach(cartIcon => {
    cartIcon.addEventListener('click', () => {
        const product = cartIcon.closest('.pro');
        const productName = product.querySelector('.des h5').textContent;
        const productPrice = product.querySelector('.des h4').textContent;
        
        const modalContent = `
            <div class="modal-content">
                <span class="close">&times;</span>
                <h2>${productName}</h2>
                <p>Price: ${productPrice}</p>
                <label for="quantity">Quantity:</label>
                <input type="number" id="quantity" value="1" min="1">
                <button id="addToCart">Add to Cart</button>
            </div>
        `;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = modalContent;

        document.body.appendChild(modal);

        modal.style.display = 'block';
        modal.style.position = 'absolute';
        
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        modal.querySelector('#addToCart').addEventListener('click', () => {
            const quantity = parseInt(modal.querySelector('#quantity').value);
            addToCart(productName, productPrice, quantity);
            modal.style.display = 'none';
        });
    });
});
