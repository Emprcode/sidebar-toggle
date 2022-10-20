const toggleBtn = document.querySelector(".sidebar-toggle");

const closeBtn = document.querySelector(".close-btn");

const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", ((a) => {
    sidebar.classList.toggle("show-sidebar");
}))

closeBtn.addEventListener("click", ((i) => {
    sidebar.classList.remove("show-sidebar");
}
));