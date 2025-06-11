
    const menuButton = document.querySelector(".container");
    const menuList = document.getElementById("open-md");

    function toggleMenu() {
        menuButton.classList.toggle("change");
        menuList.style.display = menuList.style.display === "flex" ? "none" : "flex";
    }

    // Toggle menu on click
    menuButton.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
        if (!menuButton.contains(e.target) && menuList.style.display === "flex") {
            menuButton.classList.remove("change");
            menuList.style.display = "none";
        }
    });

