const shopProducts = [{
    id: "a9",
    image: "pictures/Catalogue/Cat normal029.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal1.jpg",
        image2: "pictures/shop products/Cat normal1_1.jpg",
        image3: "pictures/shop products/Cat normal1_2.jpg",
        image4: "pictures/shop products/Cat normal1_3.jpg"
    },
    name: "Sleeveless Knit Golfer",
    priceCents: 85000
}, {
    id: "a10",
    image: "pictures/Catalogue/Cat normal016.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal2.jpg",
        image2: "pictures/shop products/Cat normal2_1.jpg",
        image3: "pictures/shop products/Cat normal2_2.jpg",
        image4: "pictures/shop products/Cat normal2_3.jpg"
    },
    name: "Logo Reversible Bucket Hat",
    priceCents: 30000
}, {
    id: "a11",
    image: "pictures/Catalogue/Cat normal017.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal3.jpg",
        image2: "pictures/shop products/Cat normal3_1.jpg",
        image3: "pictures/shop products/Cat normal3_2.jpg",
        image4: "pictures/shop products/Cat normal3_3.jpg"
    },
    name: "Logo Reversible Bucket Hat",
    priceCents: 30000
}, {
    id: "a1",
    image: "pictures/Catalogue/Cat normal043.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal4.jpg",
        image2: "pictures/shop products/Cat normal4_1.jpg",
        image3: "pictures/shop products/Cat normal4_2.jpg",
        image4: "pictures/shop products/Cat normal4_3.jpg"
    },
    name: "Tea t-shirt",
    priceCents: 50000
}, {
    id: "a2",
    image: "pictures/Catalogue/Cat normal008.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal5.jpg",
        image2: "pictures/shop products/Cat normal5_1.jpg",
        image3: "pictures/shop products/Cat normal5_2.jpg",
        image4: "pictures/shop products/Cat normal5_3.jpg"
    },
    name: "Military Jacket",
    priceCents: 100000
}, {
    id: "a3",
    image: "pictures/Catalogue/Cat normal018.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal6.jpg",
        image2: "pictures/shop products/Cat normal6_1.jpg",
        image3: "pictures/shop products/Cat normal6_2.jpg",
        image4: "pictures/shop products/Cat normal6_3.jpg"
    },
    name: "Bird graphic Puncho shirt",
    priceCents: 90000
}, {
    id: "a4",
    image: "pictures/Catalogue/Cat normal022.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal7.jpg",
        image2: "pictures/shop products/Cat normal7_1.jpg",
        image3: "pictures/shop products/Cat normal7_2.jpg",
        image4: "pictures/shop products/Cat normal7_3.jpg"
    },
    name: "Shoulder-cut Shirt",
    priceCents: 55000
}, {
    id: "a5",
    image: "pictures/Catalogue/Cat normal005.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal8.jpg",
        image2: "pictures/shop products/Cat normal8_1.jpg",
        image3: "pictures/shop products/Cat normal8_2.jpg",
        image4: "pictures/shop products/Cat normal8_3.jpg"
    },
    name: "High Waist Pants",
    priceCents: 65000
}, {
    id: "a6",
    image: "pictures/Catalogue/Cat normal037.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal9.jpg",
        image2: "pictures/shop products/Cat normal9_1.jpg",
        image3: "pictures/shop products/Cat normal9_2.jpg",
        image4: "pictures/shop products/Cat normal9_3.jpg"
    },
    name: "Khakhi Dashed Trousers",
    priceCents: 70000
}, {
    id: "a7",
    image: "pictures/Catalogue/Cat normal047.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal10.jpg",
        image2: "pictures/shop products/Cat normal10_1.jpg",
        image3: "pictures/shop products/Cat normal10_2.jpg",
        image4: "pictures/shop products/Cat normal10_3.jpg"
    },
    name: "Bermuda Shorts",
    priceCents: 40000
}, {
    id: "a8",
    image: "pictures/Catalogue/Cat normal041.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal11.jpg",
        image2: "pictures/shop products/Cat normal11_1.jpg",
        image3: "pictures/shop products/Cat normal11_2.jpg",
        image4: "pictures/shop products/Cat normal11_3.jpg"
    },
    name: "Luggage-tag Bag",
    priceCents: 75000
}, {
    id: "a12",
    image: "pictures/Catalogue/Cat normal001.jpg",
    singleProductImages: {
        image1: "pictures/shop products/Cat normal12.jpg",
        image2: "pictures/shop products/Cat normal12_1.jpg",
        image3: "pictures/shop products/Cat normal12_2.jpg",
        image4: "pictures/shop products/Cat normal12_3.jpg"
    },
    name: "Stripped Shorts",
    priceCents: 40000
}];

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