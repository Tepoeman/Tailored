const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Causal ",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/black suit.png",
            },
            {
                code: "darkblue",
                img: "./img/blue suits.png",
            },
        ],
    },
    {
        id: 2,
        title: "Wedding",
        price: 149,
        colors: [
            {
                code: "black",
                img: "./img/wedding black suit.png",
            },
            {
                code: "dark-blue",
                img: "./img/dark blue suit.png",
            },
        ],
    },
    {
        id: 3,
        title: "Custom",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/light gray.png",
            },
            {
                code: "green",
                img: "./img/green suit.png",
            },
        ],
    },
    {
        id: 4,
        title: "Slim",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/slim suit.png",
            },
            {
                code: "lightgray",
                img: "./img/gray suit.png",
            },
        ],
    },
    {
        id: 5,
        title: "Double-Breasted",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/gray double.png",
            },
            {
                code: "black",
                img: "./img/double breasted black.png",
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        //change the choosen product
        choosenProduct = products[index];

        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        //assing new colors
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
    payment.style.display = "flex";
});

close.addEventListener("click", () => {
    payment.style.display = "none";
});