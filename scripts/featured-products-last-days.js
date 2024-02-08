let featuredProductsHTML = '';

featuredProducts.forEach((featuredProduct) => {
    featuredProductsHTML += `
        <div class="product-box">
            <img src="${featuredProduct.image}" alt="" class="product-img">
            <h2 class="product-title">${featuredProduct.name}</h2>
            <span class="price">R ${(featuredProduct.priceCents / 100).toFixed(2)}</span>
            <div class="cart-add-container js-add-to-cart"
            data-product-name="${featuredProduct.name}"
            data-product-image="${featuredProduct.image}"
            data-product-price="${(featuredProduct.priceCents / 100).toFixed(2)}"
            data-product-id="${featuredProduct.id}">
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

document.querySelector('.js-featured-content').innerHTML = featuredProductsHTML;

document.querySelectorAll('.js-add-to-cart').forEach((button) => {
    button.addEventListener('click', () => {
        const productName = button.dataset.productName;
        const productPrice= button.dataset.productPrice;
        const productImage = button.dataset.productImage;
        const productId = button.dataset.productId;

        let matchingItem;

        cartItems.forEach((item) => {
            if (productId === item.productId) {
                matchingItem = item;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += 1;
        } else {
            cartItems.push({
                productName: productName,
                productPrice: productPrice,
                productImage: productImage,
                productId: productId,
                quantity: 1
            });
        }

        let cartQuantity = 0;

        cartItems.forEach((item) =>{
            cartQuantity += item.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
    });
});