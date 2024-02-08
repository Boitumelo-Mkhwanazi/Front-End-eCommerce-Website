const featuredProducts = [{
    id: 'a1',
    image: 'pictures/Catalogue/Cat normal043.jpg',
    singleProductImages: {
        image1: 'pictures/product featured products/Cat normal01.jpg',
        image2: 'pictures/product featured products/Cat normal01_1.jpg',
        image3: 'pictures/product featured products/Cat normal01_2.jpg',
        image4: 'pictures/product featured products/Cat normal01_3.jpg'
    },
    name: 'Tea t-shirt',
    priceCents: 50000
}, {
    id: 'a3',
    image: 'pictures/Catalogue/Cat normal018.jpg',
    singleProductImages: {
        image1: 'pictures/product featured products/Cat normal03.jpg',
        image2: 'pictures/product featured products/Cat normal03_1.jpg',
        image3: 'pictures/product featured products/Cat normal03_2.jpg',
        image4: 'pictures/product featured products/Cat normal03_3.jpg'
    },
    name: 'Bird graphic Puncho shirt',
    priceCents: 90000
}, {
    id: 'a10',
    image: 'pictures/Catalogue/Cat normal016.jpg',
    singleProductImages: {
        image1: 'pictures/product featured products/Cat normal016.jpg',
        image2: 'pictures/product featured products/Cat normal016.jpg',
        image3: 'pictures/product featured products/Cat normal016.jpg',
        image4: 'pictures/product featured products/Cat normal016.jpg'
    },
    name: 'Logo Reversible Bucket Hat',
    priceCents: 30000
}, {
    id: 'a2',
    image: 'pictures/Catalogue/Cat normal008.jpg',
    singleProductImages: {
        image1: 'pictures/product featured products/Cat normal02.jpg',
        image2: 'pictures/product featured products/Cat normal02_1.jpg',
        image3: 'pictures/product featured products/Cat normal02_2.jpg',
        image4: 'pictures/product featured products/Cat normal0_3.jpg'
    },
    name: 'Military Jacket',
    priceCents: 100000
}];

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