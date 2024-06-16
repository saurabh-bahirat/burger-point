// Select all "Buy Now" buttons
const buyNowButtons = document.querySelectorAll('button');

// Add click event listeners to each button
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Thanks for shopping! Have a great day, visit again.');
    });
});
