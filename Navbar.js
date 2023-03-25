// navbar.js
document.addEventListener("DOMContentLoaded", function() {
  const navbarElement = document.getElementById("navbar");

  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      navbarElement.innerHTML = data;
      activateMenuItems();
    })
    .catch(error => console.error(error));

  function activateMenuItems() {
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach(item => {
      item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
      });
    });
  }
});
