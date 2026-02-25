/* ================= TASK 1 ================= */
function addKanban_t1() {
    const input_t1 = document.getElementById("kanbanInput");
    const text_t1 = input_t1.value.trim();
    if (!text_t1) return;

    const taskDiv_t1 = document.createElement("div");
    taskDiv_t1.className = "task_t1";
    taskDiv_t1.draggable = true;
    taskDiv_t1.innerText = text_t1;

    taskDiv_t1.addEventListener("dragstart", function (e) {
        e.dataTransfer.setData("text/plain", "");
        window.draggedTask_t1 = taskDiv_t1;
    });

    document.querySelector(".column_t1").appendChild(taskDiv_t1);
    input_t1.value = "";
}

function drop_t1(event_t1) {
    event_t1.preventDefault();
    if (window.draggedTask_t1) {
        event_t1.currentTarget.appendChild(window.draggedTask_t1);
    }
}


/* ================= TASK 2 ================= */
function addField_t2() {

    const wrapper_t2 = document.createElement("div");

    wrapper_t2.innerHTML = `
        <input type="text" placeholder="Enter value">
        <button type="button">Remove</button>
    `;

    const removeBtn_t2 = wrapper_t2.querySelector("button");

    removeBtn_t2.addEventListener("click", function () {
        wrapper_t2.remove();
    });

    document.getElementById("formBuilder").appendChild(wrapper_t2);
}


/* ================= TASK 3 ================= */
let products_t3 = [
    { name: "Item A", price: 100 },
    { name: "Item B", price: 200 }
];

function renderCart_t3() {
    let cartContainer_t3 = document.getElementById("cart");
    cartContainer_t3.innerHTML = "";
    let totalAmount_t3 = 0;

    products_t3.forEach((product_t3, index_t3) => {
        let qty_t3 = product_t3.qty || 1;
        totalAmount_t3 += product_t3.price * qty_t3;

        cartContainer_t3.innerHTML += `
            <div class="cart-item_t3">
                ${product_t3.name} ₹${product_t3.price}
                <input type="number" min="1"
                value="${qty_t3}"
                onchange="updateQty_t3(${index_t3}, this.value)">
            </div>
        `;
    });

    document.getElementById("total").innerText = totalAmount_t3;
}

function updateQty_t3(index_t3, value_t3) {
    products_t3[index_t3].qty = parseInt(value_t3);
    renderCart_t3();
}

renderCart_t3();


/* ================= TASK 4 ================= */
const employees = [
    { id: 101, name: "Arun", department: "HR", salary: 35000 },
    { id: 102, name: "Divya", department: "IT", salary: 60000 },
    { id: 103, name: "Karthik", department: "Finance", salary: 45000 },
    { id: 104, name: "Meena", department: "IT", salary: 72000 },
    { id: 105, name: "Vikram", department: "HR", salary: 39000 }
];

let currentSort = { column: null, direction: "asc" };

function renderTable(data) {
    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";

    data.forEach(emp => {
        tbody.innerHTML += `
                <tr>
                    <td>${emp.id}</td>
                    <td>${emp.name}</td>
                    <td>${emp.department}</td>
                    <td>₹${emp.salary}</td>
                </tr>
            `;
    });
}

function sortTable(column) {
    const icon = document.getElementById(column + "-icon");

    // Reset all icons
    document.querySelectorAll(".sort-icon").forEach(i => i.textContent = "");

    if (currentSort.column === column) {
        currentSort.direction = currentSort.direction === "asc" ? "desc" : "asc";
    } else {
        currentSort.column = column;
        currentSort.direction = "asc";
    }

    employees.sort((a, b) => {
        let valueA = a[column];
        let valueB = b[column];

        if (typeof valueA === "string") {
            valueA = valueA.toLowerCase();
            valueB = valueB.toLowerCase();
        }

        if (valueA < valueB) return currentSort.direction === "asc" ? -1 : 1;
        if (valueA > valueB) return currentSort.direction === "asc" ? 1 : -1;
        return 0;
    });

    icon.textContent = currentSort.direction === "asc" ? "▲" : "▼";
    renderTable(employees);
}

document.getElementById("searchInput").addEventListener("input", function () {
    const value = this.value.toLowerCase();
    const filtered = employees.filter(emp =>
        emp.name.toLowerCase().includes(value) ||
        emp.department.toLowerCase().includes(value)
    );
    renderTable(filtered);
});

renderTable(employees);


/* ================= TASK 5 ================= */

function setTheme_t5(themeClass_t5) {
    document.body.className = themeClass_t5;
    localStorage.setItem("dashboardTheme_t5", themeClass_t5);
}

window.addEventListener("load", () => {
    const savedTheme_t5 = localStorage.getItem("dashboardTheme_t5");
    if (savedTheme_t5) {
        document.body.className = savedTheme_t5;
    }
});



/* ================= TASK 6 ================= */
/* ================= TASK 6 ================= */

/* Dynamic Menu Data */
const menuData_t6 = [
    { name: "Home", content: "This is the Home dashboard overview." },
    { name: "Users", content: "Here you can manage all users." },
    { name: "Orders", content: "View and manage customer orders here." },
    { name: "Reports", content: "Analytics and reports are shown here." },
    { name: "Settings", content: "Change application settings here." }
];

const sidebarContainer_t6 = document.getElementById("sidebarContainer_t6");
const contentTitle_t6 = document.getElementById("contentTitle_t6");
const contentBody_t6 = document.getElementById("contentBody_t6");

/* Generate Sidebar Dynamically */
menuData_t6.forEach((item_t6, index_t6) => {

    const menuItemDiv_t6 = document.createElement("div");
    menuItemDiv_t6.className = "sidebar-item_t6";
    menuItemDiv_t6.innerText = item_t6.name;

    menuItemDiv_t6.addEventListener("click", () => {

        /* Remove active class */
        document.querySelectorAll(".sidebar-item_t6")
            .forEach(el_t6 => el_t6.classList.remove("sidebar-item-active_t6"));

        /* Add active class */
        menuItemDiv_t6.classList.add("sidebar-item-active_t6");

        /* Update Main Content */
        contentTitle_t6.innerText = item_t6.name;
        contentBody_t6.innerText = item_t6.content;
    });

    sidebarContainer_t6.appendChild(menuItemDiv_t6);

});

/* Default active */
document.querySelector(".sidebar-item_t6").click();


/* ================= TASK 7 ================= */
/* ================= TASK 7 ================= */

function addComment_t7() {

    const input_t7 = document.getElementById("commentInput");
    const text_t7 = input_t7.value.trim();

    if (!text_t7) return;

    const commentDiv_t7 = createCommentElement_t7(text_t7);

    document.getElementById("comments").appendChild(commentDiv_t7);

    input_t7.value = "";
}

function createCommentElement_t7(text_t7) {

    const commentWrapper_t7 = document.createElement("div");
    commentWrapper_t7.className = "comment-box_t7";

    const commentText_t7 = document.createElement("div");
    commentText_t7.innerText = text_t7;

    const replyBtn_t7 = document.createElement("button");
    replyBtn_t7.innerText = "Reply";

    const replyContainer_t7 = document.createElement("div");
    replyContainer_t7.className = "comment_t7";

    replyBtn_t7.addEventListener("click", function () {

        const replyText_t7 = prompt("Enter reply");
        if (!replyText_t7) return;

        const replyElement_t7 = createCommentElement_t7(replyText_t7);

        replyContainer_t7.appendChild(replyElement_t7);
    });

    commentWrapper_t7.appendChild(commentText_t7);
    commentWrapper_t7.appendChild(replyBtn_t7);
    commentWrapper_t7.appendChild(replyContainer_t7);

    return commentWrapper_t7;
}


/* ================= TASK 8 ================= */
const dropdown_t8 = document.getElementById("dropdown_t8");
const dropdownHeader_t8 = dropdown_t8.querySelector(".dropdown-header_t8");
const dropdownList_t8 = document.getElementById("dropdownList_t8");
const dropdownSelected_t8 = document.getElementById("dropdownSelected_t8");
const dropdownValue_t8 = document.getElementById("dropdownValue_t8");

/* Dynamic Options */
const options_t8 = [
    "India",
    "USA",
    "Canada",
    "Germany",
    "Australia"
];

let activeIndex_t8 = -1;

/* Create options dynamically */
options_t8.forEach((option_t8, index_t8) => {
    const item_t8 = document.createElement("div");
    item_t8.className = "dropdown-item_t8";
    item_t8.innerText = option_t8;

    item_t8.addEventListener("click", () => {
        selectOption_t8(option_t8, index_t8);
        closeDropdown_t8();
    });

    dropdownList_t8.appendChild(item_t8);
});

/* Toggle */
dropdownHeader_t8.addEventListener("click", () => {
    dropdown_t8.classList.toggle("dropdown-open_t8");
});

/* Select */
function selectOption_t8(value_t8, index_t8) {

    dropdownSelected_t8.innerText = value_t8;
    dropdownValue_t8.value = value_t8;
    activeIndex_t8 = index_t8;

    document.querySelectorAll(".dropdown-item_t8")
        .forEach(el_t8 => el_t8.classList.remove("dropdown-item-active_t8"));

    dropdownList_t8.children[index_t8]
        .classList.add("dropdown-item-active_t8");
}

/* Close */
function closeDropdown_t8() {
    dropdown_t8.classList.remove("dropdown-open_t8");
}

/* Click outside */
document.addEventListener("click", (e_t8) => {
    if (!dropdown_t8.contains(e_t8.target)) {
        closeDropdown_t8();
    }
});

/* Keyboard Support */
dropdownHeader_t8.addEventListener("keydown", (e_t8) => {

    const items_t8 = dropdownList_t8.children;

    if (e_t8.key === "ArrowDown") {
        activeIndex_t8 = (activeIndex_t8 + 1) % items_t8.length;
        highlightOption_t8(items_t8);
    }

    if (e_t8.key === "ArrowUp") {
        activeIndex_t8 =
            (activeIndex_t8 - 1 + items_t8.length) % items_t8.length;
        highlightOption_t8(items_t8);
    }

    if (e_t8.key === "Enter") {
        if (activeIndex_t8 >= 0) {
            selectOption_t8(
                options_t8[activeIndex_t8],
                activeIndex_t8
            );
            closeDropdown_t8();
        }
    }

    if (e_t8.key === "Escape") {
        closeDropdown_t8();
    }
});

function highlightOption_t8(items_t8) {
    document.querySelectorAll(".dropdown-item_t8")
        .forEach(el_t8 => el_t8.classList.remove("dropdown-item-active_t8"));

    items_t8[activeIndex_t8]
        .classList.add("dropdown-item-active_t8");
}

document.addEventListener("DOMContentLoaded", function () {

    /* ================= TASK 9 ================= */
    const t9_input = document.getElementById("t9_input");
    const t9_preview = document.getElementById("t9_preview");

    t9_input.addEventListener("input", function () {
        let text = t9_input.value;

        text = text.replace(/^# (.*$)/gim, "<h1>$1</h1>");
        text = text.replace(/^## (.*$)/gim, "<h2>$1</h2>");
        text = text.replace(/\*\*(.*?)\*\*/gim, "<b>$1</b>");
        text = text.replace(/\*(.*?)\*/gim, "<i>$1</i>");

        t9_preview.innerHTML = text;
    });


    /* ================= TASK 10 ================= */
    const t10_buttons = document.querySelectorAll(".t10_btn");
    const t10_breadcrumb = document.getElementById("t10_breadcrumb");
    let t10_path = [];

    t10_buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            t10_path.push(btn.dataset.page);
            t10_breadcrumb.textContent = t10_path.join(" > ");
        });
    });


    /* ================= TASK 11 ================= */
    const t11_input = document.getElementById("t11_input");
    const t11_addBtn = document.getElementById("t11_addBtn");
    const t11_notes = document.getElementById("t11_notes");
    const t11_search = document.getElementById("t11_search");

    function t11_renderNotes() {
        t11_notes.innerHTML = "";
        let notes = JSON.parse(localStorage.getItem("t11_notes")) || [];
        let search = t11_search.value.toLowerCase();

        notes
            .filter(note => note.toLowerCase().includes(search))
            .forEach(note => {
                const div = document.createElement("div");
                div.textContent = note;
                t11_notes.appendChild(div);
            });
    }

    t11_addBtn.addEventListener("click", function () {
        let notes = JSON.parse(localStorage.getItem("t11_notes")) || [];
        notes.push(t11_input.value);
        localStorage.setItem("t11_notes", JSON.stringify(notes));
        t11_input.value = "";
        t11_renderNotes();
    });

    t11_search.addEventListener("input", t11_renderNotes);
    t11_renderNotes();


    /* ================= TASK 12 ================= */
    const t12_desc = document.getElementById("t12_desc");
    const t12_amount = document.getElementById("t12_amount");
    const t12_addBtn = document.getElementById("t12_addBtn");
    const t12_list = document.getElementById("t12_list");
    const t12_total = document.getElementById("t12_total");

    let t12_sum = 0;

    t12_addBtn.addEventListener("click", function () {
        let amt = Number(t12_amount.value);
        t12_sum += amt;
        t12_total.textContent = t12_sum;

        const div = document.createElement("div");
        div.textContent = t12_desc.value + " - ₹" + amt;
        t12_list.appendChild(div);

        t12_desc.value = "";
        t12_amount.value = "";
    });


    /* ================= TASK 13 ================= */
    const t13_calcBtn = document.getElementById("t13_calcBtn");

    t13_calcBtn.addEventListener("click", function () {
        const m1 = Number(document.getElementById("t13_m1").value);
        const m2 = Number(document.getElementById("t13_m2").value);
        const m3 = Number(document.getElementById("t13_m3").value);

        const avg = (m1 + m2 + m3) / 3;
        let grade;
        let status;

        if (avg >= 75) grade = "A";
        else if (avg >= 60) grade = "B";
        else if (avg >= 50) grade = "C";
        else grade = "Fail";

        status = avg >= 50 ? "Pass" : "Fail";

        document.getElementById("t13_result").innerHTML =
            "Average: " + avg.toFixed(2) +
            "<br>Grade: " + grade +
            "<br>Status: " + status;
    });

});

/* ================= TASK 14 ================= */
let t14_contacts = [];

document.getElementById("t14_addBtn").onclick = function () {
    const name = document.getElementById("t14_name").value;
    const phone = document.getElementById("t14_phone").value;
    t14_contacts.push({ name, phone });
    t14_render();
};

function t14_render() {
    const search = document.getElementById("t14_search").value?.toLowerCase() || "";
    const list = document.getElementById("t14_list");
    list.innerHTML = "";

    t14_contacts
        .filter(c => c.name.toLowerCase().includes(search))
        .forEach((c, i) => {
            list.innerHTML += `${c.name} - ${c.phone} 
            <button onclick="t14_delete(${i})">Delete</button><br>`;
        });
}

function t14_delete(i) {
    t14_contacts.splice(i, 1);
    t14_render();
}

document.getElementById("t14_search").oninput = t14_render;


/* ================= TASK 15 ================= */

const t15_products = [
    { name: "Laptop", category: "Electronics", price: 50000 },
    { name: "Shirt", category: "Clothing", price: 1000 },
    { name: "Mobile Phone", category: "Electronics", price: 20000 },
    { name: "Headphones", category: "Electronics", price: 3000 },
    { name: "Jeans", category: "Clothing", price: 2500 },
    { name: "Jacket", category: "Clothing", price: 4000 }
];


/* ===== Function to Render Category-wise ===== */
function t15_renderCategoryWise(products, containerId) {

    const container = document.getElementById(containerId);
    container.innerHTML = "";

    if (products.length === 0) {
        container.innerHTML = "No products found.";
        return;
    }

    // Get unique categories
    const categories = [...new Set(products.map(p => p.category))];

    categories.forEach(category => {

        const heading = document.createElement("h4");
        heading.textContent = category;
        container.appendChild(heading);

        products
            .filter(p => p.category === category)
            .forEach(p => {

                const item = document.createElement("div");
                item.textContent = `${p.name} - ₹${p.price}`;
                container.appendChild(item);

            });

        container.appendChild(document.createElement("br"));
    });
}


/* ===== Show All Available Items On Page Load ===== */
t15_renderCategoryWise(t15_products, "t15_available");


/* ===== Filter Button Logic ===== */
document.getElementById("t15_filterBtn").onclick = function () {

    const cat = document.getElementById("t15_category").value;
    const maxPriceInput = document.getElementById("t15_price").value;
    const max = maxPriceInput ? Number(maxPriceInput) : Infinity;

    const filteredProducts = t15_products.filter(product =>
        (cat === "all" || product.category === cat) &&
        product.price <= max
    );

    t15_renderCategoryWise(filteredProducts, "t15_list");
};

/* ================= TASK 16 ================= */
const t16_data = Array.from({ length: 20 }, (_, i) => ({
    name: "User" + (i + 1),
    age: 20 + i
}));

let t16_page = 0;
const t16_limit = 5;

function t16_render() {
    const search = document.getElementById("t16_search").value.toLowerCase();
    const filtered = t16_data.filter(d => d.name.toLowerCase().includes(search));
    const start = t16_page * t16_limit;
    const rows = filtered.slice(start, start + t16_limit);

    const table = document.getElementById("t16_table");
    table.innerHTML = "";
    rows.forEach(r => {
        table.innerHTML += `<tr><td>${r.name}</td><td>${r.age}</td></tr>`;
    });
}

document.getElementById("t16_prev").onclick = () => { if (t16_page > 0) t16_page--; t16_render(); };
document.getElementById("t16_next").onclick = () => { t16_page++; t16_render(); };
document.getElementById("t16_search").oninput = t16_render;
t16_render();


/* ================= TASK 17 ================= */
document.getElementById("t17_addBtn").onclick = function () {
    const site = document.getElementById("t17_site").value;
    const pass = btoa(document.getElementById("t17_pass").value);
    const data = JSON.parse(localStorage.getItem("t17_data")) || [];
    data.push({ site, pass });
    localStorage.setItem("t17_data", JSON.stringify(data));
    t17_render();
};

function t17_render() {
    const data = JSON.parse(localStorage.getItem("t17_data")) || [];
    const list = document.getElementById("t17_list");
    list.innerHTML = "";
    data.forEach(d => {
        list.innerHTML += `${d.site} - ${atob(d.pass)}<br>`;
    });
}
t17_render();


/* ================= TASK 18 ================= */
document.getElementById("t18_addBtn").onclick = function () {
    const title = document.getElementById("t18_title").value;
    const url = document.getElementById("t18_url").value;
    const data = JSON.parse(localStorage.getItem("t18_data")) || [];
    data.push({ title, url });
    localStorage.setItem("t18_data", JSON.stringify(data));
    t18_render();
};

function t18_render() {
    const data = JSON.parse(localStorage.getItem("t18_data")) || [];
    const list = document.getElementById("t18_list");
    list.innerHTML = "";
    data.forEach(d => {
        list.innerHTML += `<a href="${d.url}" target="_blank">${d.title}</a><br>`;
    });
}
t18_render();


/* ================= TASK 19 ================= */
document.querySelectorAll(".t19_add").forEach(btn => {
    btn.onclick = function () {
        const cart = JSON.parse(localStorage.getItem("t19_cart")) || [];
        cart.push(btn.dataset.item);
        localStorage.setItem("t19_cart", JSON.stringify(cart));
        t19_render();
    };
});

function t19_render() {
    const cart = JSON.parse(localStorage.getItem("t19_cart")) || [];
    document.getElementById("t19_cart").innerHTML = cart.join("<br>");
}
t19_render();


/* ================= TASK 20 ================= */
/* ================= TASK 20 ================= */

const t20_form = document.getElementById("t20_form");
const t20_name = document.getElementById("t20_name");
const t20_email = document.getElementById("t20_email");
const t20_message = document.getElementById("t20_message");
const t20_status = document.getElementById("t20_status");

const t20_storageKey = "t20_formDraft";


/* ===== Load Saved Draft On Page Load ===== */
window.addEventListener("DOMContentLoaded", function () {

    const savedData = JSON.parse(localStorage.getItem(t20_storageKey));

    if (savedData) {
        t20_name.value = savedData.name || "";
        t20_email.value = savedData.email || "";
        t20_message.value = savedData.message || "";

        t20_status.textContent = "Draft restored ✅";
    }
});


/* ===== Auto Save Function ===== */
function t20_saveDraft() {

    const formData = {
        name: t20_name.value,
        email: t20_email.value,
        message: t20_message.value
    };

    localStorage.setItem(t20_storageKey, JSON.stringify(formData));

    t20_status.textContent = "Draft auto-saved...";
}


/* ===== Listen for Input Changes ===== */
t20_name.addEventListener("input", t20_saveDraft);
t20_email.addEventListener("input", t20_saveDraft);
t20_message.addEventListener("input", t20_saveDraft);


/* ===== Clear Draft On Submit ===== */
t20_form.addEventListener("submit", function (e) {

    e.preventDefault(); // prevent page reload

    localStorage.removeItem(t20_storageKey);

    t20_status.textContent = "Form submitted. Draft cleared 🎉";

    t20_form.reset();
});


/* ================= TASK 21 ================= */
const t21_images = [
    "https://images.unsplash.com/photo-1508233620467-f79f1e317a05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVyaWFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YWVyaWFsfGVufDB8fDB8fHww",
    "https://images.unsplash.com/photo-1526404423292-15db8c2334e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFlcmlhbHxlbnwwfHwwfHx8MA%3D%3D"
];

let t21_index = 0;
const t21_image = document.getElementById("t21_image");

function t21_show() {
    t21_image.src = t21_images[t21_index];
}
document.getElementById("t21_prev").onclick = () => {
    t21_index = (t21_index - 1 + t21_images.length) % t21_images.length;
    t21_show();
};
document.getElementById("t21_next").onclick = () => {
    t21_index = (t21_index + 1) % t21_images.length;
    t21_show();
};
setInterval(() => {
    t21_index = (t21_index + 1) % t21_images.length;
    t21_show();
}, 3000);
t21_show();


/* ================= TASK 22 ================= */
window.onscroll = function () {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    document.getElementById("t22_progress").style =
        `position:fixed;top:0;left:0;height:5px;background:red;width:${scrolled}%`;
};


/* ================= TASK 24 ================= */
/* ================= TASK 24 ================= */

const t24_bars = document.querySelectorAll(".t24_bar");

const t24_observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const bar = entry.target;
            const percent = bar.getAttribute("data-percent");

            bar.style.width = percent + "%";

            observer.unobserve(bar); // run only once
        }
    });

}, {
    threshold: 0.5
});

t24_bars.forEach(bar => {
    t24_observer.observe(bar);
});


/* ================= TASK 25 ================= */
document.getElementById("t25_toggle").onclick = function () {
    const box = document.getElementById("t25_box");
    box.style.display = box.style.display === "none" ? "block" : "none";
};

document.getElementById("t25_send").onclick = function () {
    const input = document.getElementById("t25_input");
    document.getElementById("t25_messages").innerHTML += input.value + "<br>";
    input.value = "";
};

/* ================= TASK 26 ================= */
const t26_words = ["Developer", "Designer", "Freelancer"];
let t26_i = 0, t26_j = 0, t26_del = false;
function t26_type() {
    let word = t26_words[t26_i];
    document.getElementById("t26_text").textContent =
        word.substring(0, t26_j);
    if (!t26_del) { t26_j++; if (t26_j > word.length) { t26_del = true; } }
    else { t26_j--; if (t26_j === 0) { t26_del = false; t26_i = (t26_i + 1) % t26_words.length; } }
    setTimeout(t26_type, 100);
}
t26_type();

/* ================= TASK 27 ================= */
document.querySelectorAll("[data-t27-modal]").forEach(btn => {
    btn.onclick = () => document.getElementById(btn.dataset.t27Modal).style.display = "flex";
});
document.querySelectorAll(".t27_close").forEach(btn => {
    btn.onclick = () => btn.closest(".t27_modal").style.display = "none";
});
window.onclick = e => {
    if (e.target.classList.contains("t27_modal")) e.target.style.display = "none";
};

/* ================= TASK 28 ================= */
/* ================= TASK 28 ================= */

document.querySelectorAll(".t28_tooltip").forEach(el => {

    let tooltip;

    el.addEventListener("mouseenter", function (e) {

        tooltip = document.createElement("div");
        tooltip.className = "t28_dynamic_tooltip";
        tooltip.textContent = el.dataset.tooltip;

        document.body.appendChild(tooltip);

        const rect = el.getBoundingClientRect();

        tooltip.style.left = rect.left + window.scrollX + "px";
        tooltip.style.top = rect.top + window.scrollY - tooltip.offsetHeight - 8 + "px";
    });

    el.addEventListener("mouseleave", function () {
        tooltip.remove();
    });

});

/* ================= TASK 29 ================= */
document.querySelectorAll(".t29_header").forEach(head => {
    head.onclick = () => {
        let body = head.nextElementSibling;
        body.style.maxHeight = body.style.maxHeight ? null : body.scrollHeight + "px";
    };
});

/* ================= TASK 30 ================= */
let t30_page = 1;
document.getElementById("t30_btn").onclick = () => {
    let box = document.getElementById("t30_content");
    box.style.opacity = 0;
    setTimeout(() => {
        t30_page++;
        box.textContent = "Page " + t30_page;
        box.style.opacity = 1;
    }, 500);
};

/* ================= TASK 31 ================= */
const t31_data = { city: "Chennai", temp: 32, condition: "Sunny" };
document.getElementById("t31_card").innerHTML =
    `<h4>${t31_data.city}</h4>
<p>${t31_data.temp}°C</p>
<p>${t31_data.condition}</p>`;

/* ================= TASK 32 ================= */
let t32_votes = { A: 0, B: 0 };
document.querySelectorAll(".t32_vote").forEach(btn => {
    btn.onclick = () => {
        t32_votes[btn.dataset.option]++;
        let total = t32_votes.A + t32_votes.B;
        document.getElementById("t32_results").innerHTML =
            `A: ${(t32_votes.A / total * 100) || 0}%<br>
 B: ${(t32_votes.B / total * 100) || 0}%`;
    };
});

/* ================= TASK 33 ================= */
/* ================= TASK 33 ================= */
/* ================= TASK 33 ================= */

const t33_questions = [
    {
        question: "HTML: What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language",
            "Home Tool Markup Language",
            "Hyperlinks Text Mark Language"
        ],
        correct: 0
    },
    {
        question: "CSS: Which property is used to change text color?",
        options: ["font-style", "text-color", "color", "background-color"],
        correct: 2
    },
    {
        question: "JavaScript: Which keyword declares a variable?",
        options: ["int", "var", "string", "declare"],
        correct: 1
    },
    {
        question: "Python: Which symbol is used for comments?",
        options: ["//", "#", "/* */", "<!-- -->"],
        correct: 1
    }
];

let t33_index = 0;
let t33_score = 0;
let t33_time = 15;
let t33_timerInterval;

const t33_questionEl = document.getElementById("t33_question");
const t33_optionsEl = document.getElementById("t33_options");
const t33_timerEl = document.getElementById("t33_timer");
const t33_resultEl = document.getElementById("t33_result");
const t33_nextBtn = document.getElementById("t33_next");

function t33_startTimer() {
    t33_timerEl.textContent = "Time Left: " + t33_time;

    t33_timerInterval = setInterval(() => {
        t33_time--;
        t33_timerEl.textContent = "Time Left: " + t33_time;

        if (t33_time <= 0) {
            clearInterval(t33_timerInterval);
            t33_showResult(null); // No answer selected
        }
    }, 1000);
}

function t33_loadQuestion() {
    clearInterval(t33_timerInterval);
    t33_time = 15;
    t33_startTimer();

    const current = t33_questions[t33_index];
    t33_questionEl.textContent = current.question;
    t33_optionsEl.innerHTML = "";
    t33_resultEl.textContent = "";

    current.options.forEach((option, i) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => t33_showResult(i);
        t33_optionsEl.appendChild(btn);
    });
}

function t33_showResult(selected) {
    clearInterval(t33_timerInterval);

    const correctIndex = t33_questions[t33_index].correct;
    const buttons = t33_optionsEl.querySelectorAll("button");

    // Disable all buttons
    buttons.forEach(btn => btn.disabled = true);

    if (selected === correctIndex) {
        t33_score += 1;
        t33_resultEl.textContent = "Correct! +1";
        t33_resultEl.style.color = "green";
    } else {
        t33_score -= 0.25;
        t33_resultEl.textContent = "Wrong! -0.25";
        t33_resultEl.style.color = "red";
    }

    // Highlight correct answer
    buttons[correctIndex].style.backgroundColor = "lightgreen";

    if (selected !== null && selected !== correctIndex) {
        buttons[selected].style.backgroundColor = "salmon";
    }

    // Auto move after 2 seconds
    setTimeout(() => {
        t33_nextQuestion();
    }, 2000);
}

function t33_nextQuestion() {
    t33_index++;

    if (t33_index < t33_questions.length) {
        t33_loadQuestion();
    } else {
        t33_questionEl.textContent = "Quiz Finished!";
        t33_optionsEl.innerHTML = "";
        t33_timerEl.textContent = "";
        t33_resultEl.textContent = "Final Score: " + t33_score;
        t33_resultEl.style.color = "black";
    }
}

t33_nextBtn.onclick = t33_nextQuestion;

// Start quiz
t33_loadQuestion();

/* ================= TASK 34 ================= */
for (let i = 0; i < 20; i++) {
    let seat = document.createElement("div");
    seat.onclick = () => {
        seat.classList.toggle("t34_selected");
        let total = document.querySelectorAll(".t34_selected").length * 150;
        document.getElementById("t34_total").textContent = total;
    };
    document.getElementById("t34_seats").appendChild(seat);
}

/* ================= TASK 35 ================= */
/* ================= TASK 35 ================= */

const t35_monthYear = document.getElementById("t35_monthYear");
const t35_dates = document.getElementById("t35_dates");
const t35_prev = document.getElementById("t35_prev");
const t35_next = document.getElementById("t35_next");
const t35_daysContainer = document.getElementById("t35_days");
const t35_selectedDateText = document.getElementById("t35_selectedDate");

let t35_currentDate = new Date();

const t35_dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function t35_renderDays() {
    t35_daysContainer.innerHTML = "";
    t35_dayNames.forEach(day => {
        const div = document.createElement("div");
        div.textContent = day;
        t35_daysContainer.appendChild(div);
    });
}

function t35_renderCalendar() {
    t35_dates.innerHTML = "";

    const year = t35_currentDate.getFullYear();
    const month = t35_currentDate.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    t35_monthYear.textContent =
        t35_currentDate.toLocaleString("default", { month: "long" }) +
        " " + year;

    // Empty spaces before first date
    for (let i = 0; i < firstDay; i++) {
        const empty = document.createElement("div");
        t35_dates.appendChild(empty);
    }

    // Dates
    for (let d = 1; d <= lastDate; d++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = d;

        dateDiv.onclick = function () {
            document
                .querySelectorAll("#t35_dates div")
                .forEach(el => el.classList.remove("t35_selected"));

            this.classList.add("t35_selected");

            const selectedFullDate = new Date(year, month, d);

            t35_selectedDateText.textContent =
                "Selected Date: " +
                selectedFullDate.toDateString();
        };

        t35_dates.appendChild(dateDiv);
    }
}

t35_prev.onclick = function () {
    t35_currentDate.setMonth(t35_currentDate.getMonth() - 1);
    t35_renderCalendar();
    t35_selectedDateText.textContent = "";
};

t35_next.onclick = function () {
    t35_currentDate.setMonth(t35_currentDate.getMonth() + 1);
    t35_renderCalendar();
    t35_selectedDateText.textContent = "";
};

t35_renderDays();
t35_renderCalendar();

/* ================= TASK 36 ================= */
document.getElementById("t36_add").onclick = () => {
    let row = document.createElement("div");
    row.innerHTML = `<input type="number" class="price" placeholder="Price">
<input type="number" class="qty" placeholder="Qty">`;
    document.getElementById("t36_items").appendChild(row);
    row.oninput = () => {
        let total = 0;
        document.querySelectorAll("#t36_items div").forEach(r => {
            let p = r.querySelector(".price")?.value || 0;
            let q = r.querySelector(".qty")?.value || 0;
            total += p * q;
        });
        document.getElementById("t36_total").textContent = total;
    };
};

/* ================= TASK 37 ================= */
let drop = document.getElementById("t37_drop");
drop.ondragover = e => e.preventDefault();
drop.ondrop = e => {
    e.preventDefault();
    [...e.dataTransfer.files].forEach(file => {
        let reader = new FileReader();
        reader.onload = ev => {
            let img = document.createElement("img");
            img.src = ev.target.result;
            img.width = 100;
            document.getElementById("t37_preview").appendChild(img);
        };
        reader.readAsDataURL(file);
    });
};

/* ================= TASK 38 ================= */
/* ================= TASK 38 ================= */

const t38_products = [
    { id: 1, name: "Phone A", price: 15000, ram: 4, storage: 64 },
    { id: 2, name: "Phone B", price: 20000, ram: 6, storage: 128 },
    { id: 3, name: "Phone C", price: 18000, ram: 8, storage: 128 },
    { id: 4, name: "Phone D", price: 22000, ram: 8, storage: 256 }
];

const t38_select = document.getElementById("t38_productSelect");
const t38_addBtn = document.getElementById("t38_addBtn");
const t38_container = document.getElementById("t38_compareContainer");

let t38_selectedProducts = [];

// Populate dropdown
t38_products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    t38_select.appendChild(option);
});

t38_addBtn.onclick = function () {
    const id = parseInt(t38_select.value);
    if (!id) return;

    const product = t38_products.find(p => p.id === id);

    if (!t38_selectedProducts.includes(product)) {
        t38_selectedProducts.push(product);
        t38_renderTable();
    }
};

function t38_renderTable() {
    if (t38_selectedProducts.length === 0) {
        t38_container.innerHTML = "";
        return;
    }

    let table = "<table><tr><th>Feature</th>";

    t38_selectedProducts.forEach(p => {
        table += `<th>${p.name} <span class="t38_remove" onclick="t38_remove(${p.id})">✖</span></th>`;
    });

    table += "</tr>";

    const features = ["price", "ram", "storage"];

    features.forEach(feature => {
        table += `<tr><td>${feature.toUpperCase()}</td>`;

        let values = t38_selectedProducts.map(p => p[feature]);
        let bestValue =
            feature === "price"
                ? Math.min(...values)
                : Math.max(...values);

        t38_selectedProducts.forEach(p => {
            const isBest = p[feature] === bestValue;
            table += `<td class="${isBest ? "t38_best" : ""}">${p[feature]}</td>`;
        });

        table += "</tr>";
    });

    table += "</table>";
    t38_container.innerHTML = table;
}

function t38_remove(id) {
    t38_selectedProducts =
        t38_selectedProducts.filter(p => p.id !== id);
    t38_renderTable();
}

/* ================= TASK 39 ================= */
const t39_items = ["Apple", "Banana", "Orange", "Mango"];
const t39_results = document.getElementById("t39_results");

function t39_render() {
    let search = document.getElementById("t39_search").value.toLowerCase();
    t39_results.innerHTML = "";
    t39_items
        .filter(i => i.toLowerCase().includes(search))
        .forEach(i => {
            let div = document.createElement("div");
            div.innerHTML = `<input type='checkbox'> ${i}`;
            t39_results.appendChild(div);
        });
}
document.getElementById("t39_search").oninput = t39_render;
t39_render();

/* ================= TASK 40 ================= */
/* ================= TASK 40 ================= */

let t40_currentStep = 0;
const t40_steps = document.querySelectorAll(".t40_step");
const t40_progress = document.querySelector(".t40_progress");

function t40_showStep(index) {

    t40_steps.forEach(step => step.classList.remove("active"));
    t40_steps[index].classList.add("active");

    let progressPercent = ((index + 1) / t40_steps.length) * 100;
    t40_progress.style.width = progressPercent + "%";

    // Show summary on final step
    if (index === 2) {
        document.getElementById("t40_summary").innerHTML =
            `
      <strong>Name:</strong> ${document.getElementById("t40_name").value}<br>
      <strong>Email:</strong> ${document.getElementById("t40_email").value}<br>
      <strong>City:</strong> ${document.getElementById("t40_city").value}<br>
      <strong>Country:</strong> ${document.getElementById("t40_country").value}
      `;
    }
}

document.getElementById("t40_next").onclick = function () {

    if (t40_currentStep < t40_steps.length - 1) {
        t40_currentStep++;
        t40_showStep(t40_currentStep);
    } else {
        alert("Form Submitted Successfully ✅");
        document.getElementById("t40_form").reset();
        t40_currentStep = 0;
        t40_showStep(t40_currentStep);
    }
};

document.getElementById("t40_prev").onclick = function () {
    if (t40_currentStep > 0) {
        t40_currentStep--;
        t40_showStep(t40_currentStep);
    }
};

// Initialize
t40_showStep(0);

/* ================= TASK 41 ================= */
function t41_addTask() {
    let val = document.getElementById("t41_input").value;
    let div = document.createElement("div");
    div.innerHTML = `${val}
<button onclick="this.parentElement.remove()">Delete</button>`;
    document.getElementById("t41_board").appendChild(div);
}

/* ================= TASK 42 ================= */
/* ================= TASK 42 ================= */

const t42_sidebar = document.getElementById("t42_sidebar");
const t42_toggleBtn = document.getElementById("t42_toggle");

t42_toggleBtn.onclick = function () {
    t42_sidebar.classList.toggle("collapsed");
};

/* ================= TASK 43 ================= */
function t43_showToast() {
    let toast = document.createElement("div");
    toast.className = "t43_toast";
    toast.innerText = "Notification!";
    document.getElementById("t43_toastContainer").appendChild(toast);
    setTimeout(() => toast.remove(), 2000);
}

/* ================= TASK 44 ================= */
const t44_posts = [
    { title: "Post 1", category: "Tech" },
    { title: "Post 2", category: "Life" },
    { title: "Post 3", category: "Tech" }
];
const t44_select = document.getElementById("t44_category");
["All", "Tech", "Life"].forEach(c => {
    let opt = document.createElement("option");
    opt.value = c; opt.text = c;
    t44_select.appendChild(opt);
});
function t44_render() {
    let cat = t44_select.value;
    let blog = document.getElementById("t44_blog");
    blog.innerHTML = "";
    t44_posts
        .filter(p => cat == "All" || p.category == cat)
        .forEach(p => {
            blog.innerHTML += `<div>${p.title} - ${p.category}</div>`;
        });
}
t44_select.onchange = t44_render;
t44_render();

/* ================= TASK 45 ================= */
/* ================= TASK 45 ================= */

const t45_plan = document.getElementById("t45_plan");
const t45_users = document.getElementById("t45_users");
const t45_addons = document.querySelectorAll(".t45_addon");
const t45_subtotal = document.getElementById("t45_subtotal");
const t45_tax = document.getElementById("t45_tax");
const t45_total = document.getElementById("t45_total");

function t45_calculate() {

    let planPrice = parseInt(t45_plan.value);
    let users = parseInt(t45_users.value);

    // Billing
    let billingMonths = parseInt(
        document.querySelector("input[name='t45_billing']:checked").value
    );

    let subtotal = planPrice * users * billingMonths;

    // Yearly discount (10%)
    if (billingMonths === 12) {
        subtotal *= 0.9;
    }

    // Add-ons
    t45_addons.forEach(cb => {
        if (cb.checked) {
            subtotal += parseInt(cb.value);
        }
    });

    let tax = subtotal * 0.18;
    let total = subtotal + tax;

    t45_subtotal.textContent = subtotal.toFixed(2);
    t45_tax.textContent = tax.toFixed(2);
    t45_total.textContent = total.toFixed(2);
}

t45_plan.onchange = t45_calculate;
t45_users.oninput = t45_calculate;
t45_addons.forEach(cb => cb.onchange = t45_calculate);
document.querySelectorAll("input[name='t45_billing']")
    .forEach(r => r.onchange = t45_calculate);

t45_calculate();

/* ================= TASK 46 ================= */
/* ================= TASK 46 ================= */

let t46_players = [
    { name: "Alice", score: 80 },
    { name: "Bob", score: 95 },
    { name: "Charlie", score: 70 }
];

const t46_board = document.getElementById("t46_board");
const t46_addBtn = document.getElementById("t46_addBtn");

function t46_render() {

    // Sort descending
    t46_players.sort((a, b) => b.score - a.score);

    t46_board.innerHTML = "";

    t46_players.forEach((player, index) => {

        const div = document.createElement("div");
        div.classList.add("t46_player");

        // Highlight top 3
        if (index === 0) div.classList.add("t46_top1");
        if (index === 1) div.classList.add("t46_top2");
        if (index === 2) div.classList.add("t46_top3");

        div.innerHTML = `
      <span class="t46_rank">#${index + 1}</span>
      <span>${player.name}</span>
      <span>
        ${player.score}
        <span class="t46_delete" onclick="t46_remove(${index})">✖</span>
      </span>
    `;

        t46_board.appendChild(div);
    });
}

function t46_remove(index) {
    t46_players.splice(index, 1);
    t46_render();
}

t46_addBtn.onclick = function () {

    const name = document.getElementById("t46_name").value.trim();
    const score = parseInt(document.getElementById("t46_score").value);

    if (!name || isNaN(score)) {
        alert("Enter valid name and score");
        return;
    }

    t46_players.push({ name, score });

    document.getElementById("t46_name").value = "";
    document.getElementById("t46_score").value = "";

    t46_render();
};

t46_render();

/* ================= TASK 47 ================= */
const t47_tabs = ["Home", "Profile", "Settings"];
const t47_tabContainer = document.getElementById("t47_tabs");
t47_tabs.forEach(tab => {
    let btn = document.createElement("button");
    btn.innerText = tab;
    btn.onclick = () => location.hash = tab;
    t47_tabContainer.appendChild(btn);
});
window.onhashchange = () => {
    document.getElementById("t47_content").innerText =
        "Active Tab: " + location.hash.replace("#", "");
}
window.onhashchange();

/* ================= TASK 48 ================= */
function t48_vote(choice) {
    let data = JSON.parse(localStorage.getItem("t48_poll") || "{}");
    data[choice] = (data[choice] || 0) + 1;
    localStorage.setItem("t48_poll", JSON.stringify(data));
    t48_show();
}
function t48_show() {
    let data = JSON.parse(localStorage.getItem("t48_poll") || "{}");
    document.getElementById("t48_result").innerText =
        JSON.stringify(data);
}
t48_show();

/* ================= TASK 49 ================= */
/* ================= TASK 49 ================= */

const t49_chatBox = document.getElementById("t49_chatBox");
const t49_input = document.getElementById("t49_input");
const t49_sendBtn = document.getElementById("t49_sendBtn");

function t49_getTime() {
    const now = new Date();
    return now.getHours() + ":" +
        now.getMinutes().toString().padStart(2, "0");
}

function t49_addMessage(text, sender) {
    const msg = document.createElement("div");
    msg.classList.add("t49_message", sender);

    msg.innerHTML = `
    ${text}
    <div class="t49_time">${t49_getTime()}</div>
  `;

    t49_chatBox.appendChild(msg);

    // Auto scroll
    t49_chatBox.scrollTop = t49_chatBox.scrollHeight;
}

function t49_sendMessage() {
    const text = t49_input.value.trim();
    if (!text) return;

    t49_addMessage(text, "t49_user");
    t49_input.value = "";

    // Fake bot reply
    setTimeout(() => {
        t49_addMessage("You said: " + text, "t49_bot");
    }, 800);
}

t49_sendBtn.onclick = t49_sendMessage;

t49_input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        t49_sendMessage();
    }
});

/* ================= TASK 50 ================= */

/* Theme Toggle */
document.getElementById("t50_themeToggle").onclick = function () {
    document.body.classList.toggle("dark");
};

/* Typing Animation */
const t50_text = ["Frontend Developer", "UI Designer", "Web Developer"];
let t50_index = 0;
let t50_char = 0;

function t50_type() {
    const el = document.getElementById("t50_typing");
    el.textContent = t50_text[t50_index].substring(0, t50_char);
    t50_char++;

    if (t50_char > t50_text[t50_index].length) {
        t50_char = 0;
        t50_index = (t50_index + 1) % t50_text.length;
    }

    setTimeout(t50_type, 150);
}
t50_type();

/* Projects */
const t50_projects = [
    { name: "Portfolio Website", type: "web" },
    { name: "Todo App", type: "app" },
    { name: "Ecommerce Site", type: "web" }
];

function t50_renderProjects(filter = "all") {
    const container = document.getElementById("t50_projectList");
    container.innerHTML = "";

    t50_projects
        .filter(p => filter === "all" || p.type === filter)
        .forEach(p => {
            container.innerHTML += `<div>${p.name} (${p.type})</div>`;
        });
}

document.getElementById("t50_filter").onchange = function () {
    t50_renderProjects(this.value);
};

t50_renderProjects();

/* Contact Form */
function t50_submit() {
    let name = document.getElementById("t50_name").value;
    let email = document.getElementById("t50_email").value;
    let msg = document.getElementById("t50_message").value;

    if (!name || !email || !msg) {
        alert("Fill all fields!");
        return;
    }

    alert("Message Sent ✅");
}