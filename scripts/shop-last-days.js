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
            data-product-price="${(shopProduct.priceCents / 100).toFixed(2)}"
            data-product-id="${shopProduct.id}">
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

        const bags = document.querySelectorAll('.js-cart-quantity');

        bags.forEach((bag) => {
            bag.innerHTML = cartQuantity;
        });
    });
});