let shopProductsHTML = '';

shopProducts.forEach((shopProduct) => {
    shopProductsHTML += `
        <div class="product-box">
            <img src="${shopProduct.image}" alt="" class="product-img">
            <h2 class="product-title">${shopProduct.name}</h2>
            <span class="price">R ${(shopProduct.priceCents / 100).toFixed(2)}</span>
            <div class="cart-add-container js-add-to-cart"
            data-product-name="${shopProduct.name}"
            data-product-image="${shopProduct.image}"
            data-product-price="${(shopProduct.priceCents / 100).toFixed(2)}">
                <div class="cart-add">
                    <i class="fa-solid fa-bag-shopping add-cart"></i>
                </div>
                <div class="add-cart-text">
                    Add to cart
                </div>
            </div>
        </div>
    `;
});

document.querySelector('.js-shop-content').innerHTML = shopProductsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        const productPrice= button.dataset.productPrice;
        const productImage = button.dataset.productImage;

        cartItems.push({
            productName: productName,
            productPrice: productPrice,
            productImage: productImage,
            quantity: 1
        });
        console.log(cartItems);
    });
});