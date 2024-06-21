// Function to create heart effect
function createHeartEffect(element) {
    const heart = document.createElement('div');
    heart.className = 'heart-effect';
    element.appendChild(heart);

    setTimeout(() => {
        element.removeChild(heart);
    }, 1000); // Duration of the heart effect animation
}

// Function to toggle like
async function toggleLike(productId) {
    let likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    const heartIcon = document.querySelector('.like-button i');
    const likeButton = document.querySelector('.like-button');
    
    if (likedItems.includes(productId)) {
        likedItems = likedItems.filter(item => item !== productId);
        heartIcon.classList.remove('liked');
        await updateLikedItems(productId, 'remove');
    } else {
        likedItems.push(productId);
        heartIcon.classList.add('liked');
        createHeartEffect(likeButton); 
        await updateLikedItems(productId, 'add');
    }

    localStorage.setItem('likedItems', JSON.stringify(likedItems));
}

// Function to check if item is already liked
function checkIfLiked(productId) {
    const likedItems = JSON.parse(localStorage.getItem('likedItems')) || [];
    return likedItems.includes(productId);
}

// Function to update liked items in the database
async function updateLikedItems(productId, action) {
    try {
        const response = await fetch('/updateLikedItems', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId, action }),
        });

        if (!response.ok) {
            throw new Error('Failed to update liked items');
        }

        const result = await response.json();
        console.log('Updated liked items:', result);
    } catch (error) {
        console.error('Error updating liked items:', error);
    }
}

window.onload = function() {
    const productId = document.querySelector('.like-button').getAttribute('onclick').split("'")[1];
    if (checkIfLiked(productId)) {
        document.querySelector('.like-button i').classList.add('liked');
    }
}
