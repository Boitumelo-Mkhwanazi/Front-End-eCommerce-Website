const homeProducts = [{
    id: "a1",
    image: "pictures/Catalogue/Cat normal043.jpg",
    singleProductImages:  {
        image1: "pictures/pictures/home products/Cat normal01.jpg",
        image2: "pictures/home products/Cat normal01_1.jpg",
        image3: "pictures/home products/Cat normal01_2.jpg",
        image4: "pictures/home products/Cat normal01_3.jpg"
    },
    name: "Tea t-shirt",
    priceCents: 50000
}, {
    id: "a2",
    image: "pictures/Catalogue/Cat normal008.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal02.jpg",
        image2: "pictures/home products/Cat normal02_1.jpg",
        image3: "pictures/home products/Cat normal02_2.jpg",
        image4: "pictures/home products/Cat normal02_3.jpg"
    },
    name: "Military Jacket",
    priceCents: 100000
}, {
    id: "a3",
    image: "pictures/Catalogue/Cat normal018.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal03.jpg",
        image2: "pictures/home products/Cat normal03_1.jpg",
        image3: "pictures/home products/Cat normal03_2.jpg",
        image4: "pictures/home products/Cat normal03_3.jpg"
    },
    name: "Bird graphic Puncho shirt",
    priceCents: 90000
}, {
    id: "a4",
    image: "pictures/Catalogue/Cat normal022.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal04.jpg",
        image2: "pictures/home products/Cat normal04_1.jpg",
        image3: "pictures/home products/Cat normal04_2.jpg",
        image4: "pictures/home products/Cat normal04_3.jpg"
    },
    name: "Shoulder-cut shirt",
    priceCents: 55000
}, {
    id: "a5",
    image: "pictures/Catalogue/Cat normal005.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal05.jpg",
        image2: "pictures/home products/Cat normal05_1.jpg",
        image3: "pictures/home products/Cat normal05_2.jpg",
        image4: "pictures/home products/Cat normal05_3.jpg"
    },
    name: "High Waist Pants",
    priceCents: 65000
}, {
    id: "a6",
    image: "pictures/Catalogue/Cat normal037.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal06.jpg",
        image2: "pictures/home products/Cat normal06_1.jpg",
        image3: "pictures/home products/Cat normal06_2.jpg",
        image4: "pictures/home products/Cat normal06_3.jpg"
    },
    name: "Khakhi Dashed Trousers",
    priceCents: 70000
}, {
    id: "a7",
    image: "pictures/Catalogue/Cat normal047.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal07.jpg",
        image2: "pictures/home products/Cat normal07_1.jpg",
        image3: "pictures/home products/Cat normal07_2.jpg",
        image4: "pictures/home products/Cat normal07_3.jpg"
    },
    name: "Bermuda Shorts",
    priceCents: 40000
}, {
    id: "a8",
    image: "pictures/Catalogue/Cat normal041.jpg",
    singleProductImages: {
        image1: "pictures/home products/Cat normal08.jpg",
        image2: "pictures/home products/Cat normal08_1.jpg",
        image3: "pictures/home products/Cat normal08_2.jpg",
        image4: "pictures/home products/Cat normal08_3.jpg"
    },
    name: "Luggage-tag Bag",
    priceCents: 75000
}];

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