let featuredProductsHTML = '';

featuredProducts.forEach((featuredProduct) => {
    featuredProductsHTML += `
        <div class="product-box">
            <img src="${featuredProduct.image}" alt="" class="product-img">
            <h2 class="product-title">${featuredProduct.name}</h2>
            <span class="price">R ${(featuredProduct.priceCents / 100).toFixed(2)}</span>
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

document.querySelector('.js-featured-content').innerHTML = featuredProductsHTMLProductsHTML;