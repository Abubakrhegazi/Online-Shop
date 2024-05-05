// // Get the link element
// const productSectionLink = document.querySelector('#product-section-link');

// // Add click event listener to the link
// productSectionLink.addEventListener('click', (event) => {
//     // Prevent the default anchor behavior
//     event.preventDefault();
    
//     // Get the offset top of the section
//     const productSection = document.querySelector('#product1');
//     const offsetTop = productSection.offsetTop;

//     // Scroll to the section smoothly
//     window.scrollTo({
//         top: offsetTop,
//         behavior: 'smooth'
//     });
// });





// // Get the shopping cart icon element
// const cartIcon = document.querySelector('.cart');

// // Add click event listener to the shopping cart icon
// cartIcon.addEventListener('click', () => {
//     // Get product details from the first product element
//     const productName = document.querySelector('.pro:first-child .des h5').textContent;
//     const productPrice = document.querySelector('.pro:first-child .des h4').textContent;
    
//     // Populate modal with product details
//     const modalContent = `
//         <div class="modal-content">
//             <span class="close">&times;</span>
//             <h2>${productName}</h2>
//             <p>Price: ${productPrice}</p>
//             <label for="quantity">Quantity:</label>
//             <input type="number" id="quantity" value="1" min="1">
//             <button id="addToCart">Add to Cart</button>
//         </div>
//     `;

//     // Create modal element
//     const modal = document.createElement('div');
//     modal.classList.add('modal');
//     modal.innerHTML = modalContent;

//     // Append modal to body
//     document.body.appendChild(modal);

//     // Show modal
//     modal.style.display = 'block';
//     modal.style.position = 'absolute'

//     // Close modal when close button or outside modal is clicked
//     modal.querySelector('.close').addEventListener('click', () => {
//         modal.style.display = 'none';
//     });
//     window.addEventListener('click', (e) => {
//         if (e.target === modal) {
//             modal.style.display = 'none';
//         }
//     });

//     // Add to cart button functionality
//     modal.querySelector('#addToCart').addEventListener('click', () => {
//         const quantity = parseInt(modal.querySelector('#quantity').value);
//         // Add product to cart with selected quantity
//         addToCart(productName, productPrice, quantity);
//         // Close modal
//         modal.style.display = 'none';
//     });
// });
// Get all shopping cart icon elements
const cartIcons = document.querySelectorAll('.cart');

// Add click event listener to each shopping cart icon
cartIcons.forEach(cartIcon => {
    cartIcon.addEventListener('click', () => {
        // Get product details from the clicked product element
        const product = cartIcon.closest('.pro');
        const productName = product.querySelector('.des h5').textContent;
        const productPrice = product.querySelector('.des h4').textContent;
        
        // Populate modal with product details
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

        // Create modal element
        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = modalContent;

        // Append modal to body
        document.body.appendChild(modal);

        // Show modal
        modal.style.display = 'block';
        modal.style.position = 'absolute';

        // Close modal when close button or outside modal is clicked
        modal.querySelector('.close').addEventListener('click', () => {
            modal.style.display = 'none';
        });
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Add to cart button functionality
        modal.querySelector('#addToCart').addEventListener('click', () => {
            const quantity = parseInt(modal.querySelector('#quantity').value);
            // Add product to cart with selected quantity
            addToCart(productName, productPrice, quantity);
            // Close modal
            modal.style.display = 'none';
        });
    });
});
