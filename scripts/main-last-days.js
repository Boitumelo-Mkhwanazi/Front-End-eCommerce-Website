let homeProductsHTML = '';

homeProducts.forEach((homeProduct) => {
    homeProductsHTML += `
        <div class="product-box">
            <img src="${homeProduct.image}" alt="" class="product-img">
            <h2 class="product-title">${homeProduct.name}</h2>
            <span class="price">R ${(homeProduct.priceCents / 100).toFixed(2)}</span>
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

document.querySelector('.js-home-shop-content').innerHTML = homeProductsHTML;