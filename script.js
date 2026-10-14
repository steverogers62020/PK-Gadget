/* =========================
   PK GADGET - JAVASCRIPT
========================= */


/*
    IMPORTANT:
    Replace 8801XXXXXXXXX with your WhatsApp number.
    Use country code 880, without + or spaces.

    Example format:
    88017XXXXXXXX
*/

const SHOP_WHATSAPP = "8801XXXXXXXXX";

const SHOP_PHONE = "";


/*
    SAMPLE PRODUCTS

    এগুলো নমুনা প্রোডাক্ট।
    নিজের দোকানের আসল প্রোডাক্ট দিয়ে পরিবর্তন করুন।

    price: দাম
    category: new / used / gadget / digital
*/

const products = [
    {
        id: 1,
        name: "নতুন স্মার্টফোন",
        category: "new",
        price: 0,
        description: "নতুন মোবাইলের মডেল ও দাম জানতে যোগাযোগ করুন।",
        icon: "📱"
    },

    {
        id: 2,
        name: "নতুন অ্যান্ড্রয়েড ফোন",
        category: "new",
        price: 0,
        description: "বিভিন্ন ব্র্যান্ডের নতুন মোবাইল।",
        icon: "📲"
    },

    {
        id: 3,
        name: "পুরাতন স্মার্টফোন",
        category: "used",
        price: 0,
        description: "পুরাতন মোবাইলের কন্ডিশন ও দাম জেনে নিন।",
        icon: "♻️"
    },

    {
        id: 4,
        name: "ব্যবহৃত অ্যান্ড্রয়েড ফোন",
        category: "used",
        price: 0,
        description: "স্টক অনুযায়ী পুরাতন মোবাইল পাওয়া যাবে।",
        icon: "📱"
    },

    {
        id: 5,
        name: "চার্জার ও ডাটা ক্যাবল",
        category: "gadget",
        price: 0,
        description: "মোবাইল চার্জার ও ডাটা ক্যাবল।",
        icon: "🔌"
    },

    {
        id: 6,
        name: "ইয়ারফোন ও হেডফোন",
        category: "gadget",
        price: 0,
        description: "দৈনন্দিন ব্যবহারের অডিও অ্যাক্সেসরিজ।",
        icon: "🎧"
    },

    {
        id: 7,
        name: "পাওয়ার ব্যাংক",
        category: "gadget",
        price: 0,
        description: "পোর্টেবল চার্জিং অ্যাক্সেসরিজ।",
        icon: "🔋"
    },

    {
        id: 8,
        name: "ডিজিটাল প্রোডাক্ট",
        category: "digital",
        price: 0,
        description: "ডিজিটাল প্রোডাক্ট সম্পর্কে জানতে যোগাযোগ করুন।",
        icon: "💻"
    }
];


/* CATEGORY NAMES */

const categoryNames = {
    all: "সব প্রোডাক্ট",
    new: "নতুন মোবাইল",
    used: "পুরাতন মোবাইল",
    gadget: "গ্যাজেট",
    digital: "ডিজিটাল প্রোডাক্ট"
};


/* DOM ELEMENTS */

const productGrid = document.getElementById("productGrid");
const productSearch = document.getElementById("productSearch");
const sortProducts = document.getElementById("sortProducts");
const noProducts = document.getElementById("noProducts");

const filterButtons = document.querySelectorAll(".filter-btn");
const categoryCards = document.querySelectorAll(".category-card");

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");


/* CURRENT FILTER */

let currentFilter = "all";


/* FORMAT PRICE */

function formatPrice(price) {
    const amount = Number(price);

    if (!Number.isFinite(amount) || amount <= 0) {
        return "দাম জানতে যোগাযোগ করুন";
    }

    return "৳" + amount.toLocaleString("en-US");
}


/* CHECK WHATSAPP NUMBER */

function hasValidWhatsApp() {
    return /^8801\d{9}$/.test(SHOP_WHATSAPP);
}


/* CREATE WHATSAPP URL */

function createWhatsAppURL(message) {
    if (!hasValidWhatsApp()) {
        return null;
    }

    return (
        "https://wa.me/" +
        SHOP_WHATSAPP +
        "?text=" +
        encodeURIComponent(message)
    );
}


/* CREATE PRODUCT CARD */

function createProductCard(product) {
    const article = document.createElement("article");
    article.className = "product-card";

    const visual = document.createElement("div");
    visual.className = "product-visual";

    const icon = document.createElement("span");
    icon.textContent = product.icon || "📦";
    visual.appendChild(icon);

    const info = document.createElement("div");
    info.className = "product-info";

    const tag = document.createElement("span");
    tag.className = "product-tag";
    tag.textContent = categoryNames[product.category] || "প্রোডাক্ট";

    const title = document.createElement("h3");
    title.textContent = product.name;

    const description = document.createElement("p");
    description.className = "product-description";
    description.textContent = product.description;

    const bottom = document.createElement("div");
    bottom.className = "product-bottom";

    const price = document.createElement("span");
    price.className = "product-price";
    price.textContent = formatPrice(product.price);

    const orderButton = document.createElement("button");
    orderButton.className = "product-order";
    orderButton.type = "button";
    orderButton.textContent = "অর্ডার / বিস্তারিত";

    orderButton.addEventListener("click", function () {
        orderProduct(product);
    });

    bottom.append(price, orderButton);
    info.append(tag, title, description, bottom);
    article.append(visual, info);

    return article;
}


/* ORDER PRODUCT */

function orderProduct(product) {
    const message = [
        "আসসালামু আলাইকুম, PK Gadget।",
        "",
        "আমি এই প্রোডাক্ট সম্পর্কে জানতে চাই:",
        "প্রোডাক্ট: " + product.name,
        "ক্যাটাগরি: " + (
            categoryNames[product.category] || "প্রোডাক্ট"
        ),
        "দাম: " + formatPrice(product.price),
        "",
        "প্রোডাক্টটির বর্তমান স্টক ও বিস্তারিত জানাবেন।"
    ].join("\n");

    const url = createWhatsAppURL(message);

    if (!url) {
        alert(
            "WhatsApp অর্ডার চালু করতে script.js ফাইলে " +
            "আপনার সঠিক WhatsApp নম্বর যোগ করুন।"
        );

        return;
    }

    window.open(url, "_blank", "noopener,noreferrer");
}


/* GET FILTERED PRODUCTS */

function getFilteredProducts() {
    const searchText = productSearch.value
        .trim()
        .toLocaleLowerCase();

    let result = products.filter(function (product) {
        const matchesCategory =
            currentFilter === "all" ||
            product.category === currentFilter;

        const searchableText = [
            product.name,
            product.description,
            categoryNames[product.category] || ""
        ].join(" ").toLocaleLowerCase();

        const matchesSearch =
            searchableText.includes(searchText);

        return matchesCategory && matchesSearch;
    });

    const sortMode = sortProducts.value;

    if (sortMode === "low") {
        result.sort(function (a, b) {
            return a.price - b.price;
        });
    }

    if (sortMode === "high") {
        result.sort(function (a, b) {
            return b.price - a.price;
        });
    }

    return result;
}


/* RENDER PRODUCTS */

function renderProducts() {
    const filteredProducts = getFilteredProducts();

    productGrid.replaceChildren();

    filteredProducts.forEach(function (product) {
        productGrid.appendChild(createProductCard(product));
    });

    noProducts.hidden = filteredProducts.length !== 0;
    productGrid.hidden = filteredProducts.length === 0;
}


/* SET ACTIVE FILTER */

function setFilter(filter) {
    currentFilter = filter;

    filterButtons.forEach(function (button) {
        const isActive = button.dataset.filter === filter;

        button.classList.toggle("active", isActive);
    });

    renderProducts();
}


/* FILTER BUTTON EVENTS */

filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        setFilter(button.dataset.filter);
    });
});


/* CATEGORY CARD EVENTS */

categoryCards.forEach(function (card) {
    card.addEventListener("click", function () {
        setFilter(card.dataset.category);

        document.getElementById("new-mobiles").scrollIntoView({
            behavior: "smooth"
        });
    });
});


/* SEARCH EVENTS */

productSearch.addEventListener("input", renderProducts);


/* SORT EVENTS */

sortProducts.addEventListener("change", renderProducts);


/* MOBILE MENU */

menuToggle.addEventListener("click", function () {
    const isOpen = navMenu.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "মেনু বন্ধ করুন" : "মেনু খুলুন"
    );

    menuToggle.textContent = isOpen ? "✕" : "☰";
});


/* CLOSE MOBILE MENU AFTER NAVIGATION */

navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navMenu.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "মেনু খুলুন");
        menuToggle.textContent = "☰";
    });
});


/* CONTACT WHATSAPP BUTTON */

function setupWhatsAppButtons() {
    const contactButton = document.getElementById("contactWhatsApp");
    const floatingButton = document.getElementById("floatingWhatsApp");

    const message =
        "আসসালামু আলাইকুম, PK Gadget। " +
        "আপনার প্রোডাক্ট সম্পর্কে জানতে চাই।";

    const url = createWhatsAppURL(message);

    [contactButton, floatingButton].forEach(function (button) {
        if (!button) return;

        if (url) {
            button.href = url;
        } else {
            button.href = "#contact";

            button.addEventListener("click", function (event) {
                event.preventDefault();

                alert(
                    "WhatsApp চালু করতে script.js ফাইলে " +
                    "আপনার WhatsApp নম্বর যোগ করুন।"
                );
            });
        }
    });
}


/* PHONE NUMBER */

function setupPhoneNumber() {
    const phoneDisplay = document.getElementById("phoneDisplay");

    if (!SHOP_PHONE.trim()) {
        phoneDisplay.textContent =
            "ফোন নম্বর শিগগিরই যোগ করা হবে।";

        return;
    }

    const phoneLink = document.createElement("a");
    phoneLink.href = "tel:" + SHOP_PHONE.replace(/[^\d+]/g, "");
    phoneLink.textContent = SHOP_PHONE;
    phoneLink.style.color = "#65a6ff";

    phoneDisplay.replaceChildren(phoneLink);
}


/* FOOTER YEAR */

document.getElementById("currentYear").textContent =
    new Date().getFullYear();


/* INITIALIZE WEBSITE */

renderProducts();
setupWhatsAppButtons();
setupPhoneNumber();


