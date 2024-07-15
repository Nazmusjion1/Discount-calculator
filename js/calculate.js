function applyDiscount() {
    const priceInput = document.getElementById('price');
    const codeInput = document.getElementById('code');
    const finalPriceInput = document.getElementById('finalPrice');

    const price = parseFloat(priceInput.value);
    const code = codeInput.value.trim().toUpperCase();

    if (isNaN(price) || price <= 0) {
        alert('Please enter a valid price');
        return;
    }

    if (code === 'DISC30') {
        const discountedPrice = price * 0.7;
        finalPriceInput.value = discountedPrice.toFixed(2);
    } else {
        finalPriceInput.value = price.toFixed(2);
        alert('Invalid discount code. No discount applied.');
    }
}
