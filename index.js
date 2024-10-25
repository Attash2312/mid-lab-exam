document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    // Toggle menu visibility on icon click
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent click from closing menu immediately
        if (menuList.style.display === "block") {
            menuList.style.display = "none";
        } else {
            menuList.style.display = "block";
        }
    });

    // Close menu if clicking outside of it
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = "none"; // Hide menu when clicking outside
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const menuList = document.getElementById("menu-list");

    // Toggle the display of the menu list when the icon is clicked
    menuIcon.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevents the click from propagating to document
        menuList.style.display = menuList.style.display === "block" ? "none" : "block";
    });

    // Close the menu if the user clicks outside of it
    document.addEventListener("click", function (event) {
        if (!menuIcon.contains(event.target) && !menuList.contains(event.target)) {
            menuList.style.display = "none"; // Hide menu
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const moreButton = document.querySelector(".more-container");
    const hiddenSpeakers = document.querySelectorAll(".speaker-item.hidden");

    moreButton.addEventListener("click", function () {
        hiddenSpeakers.forEach((speaker) => {
            speaker.classList.remove("hidden"); // Show each hidden speaker
        });

        // Optionally, hide the "More" button after showing the hidden speakers
        moreButton.style.display = "none";
    });
});
