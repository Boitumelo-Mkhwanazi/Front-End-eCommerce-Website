//MENU BAR FOR SMALL DEVICES

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

// Sliding Cart 

let cartIcon = document.querySelectorAll("#bag");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#cart-close");

cartIcon.forEach((bag) => {
    bag.onclick = () => {
        cart.classList.add("bag-active");
    };
})

closeCart.onclick = () => {
    cart.classList.remove("bag-active");
}

// FAQ Toggle Answers

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //change icon 
        const icon = faq.querySelector('.faq-icon i');
        if (icon.className === 'fa-solid fa-plus') {
            icon.className = "fa-solid fa-minus";
        } else {
            icon.className = "fa-solid fa-plus";
        }
    })
})


