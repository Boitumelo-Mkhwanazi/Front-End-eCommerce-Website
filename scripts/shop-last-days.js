let shopProductsHTML = '';

shopProducts.forEach((shopProduct) => {
    shopProductsHTML += `
        <div class="product-box">
            <img src="${shopProduct.image}" alt="" class="product-img">
            <h2 class="product-title">${shopProduct.name}</h2>
            <span class="price">R ${(shopProduct.priceCents / 100).toFixed(2)}</span>
            <div class="cart-add-container">
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