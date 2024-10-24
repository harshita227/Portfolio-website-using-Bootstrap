function tabShow() {
    // Get all tab links and tab content elements
    const tabLinks = document.querySelectorAll(".tab__links");
    const tabContents = document.querySelectorAll(".tab__contents");

    // Function to hide all tab contents
    function hideAllTabContents() {
        tabContents.forEach(content => content.classList.remove("active"));
    }

    // Function to show the corresponding tab content
    function showTabContent(tab) {
        hideAllTabContents();
        const contentId = tab.textContent.trim().toLowerCase();
        const contentElement = document.getElementById(contentId);
        if (contentElement) {
            contentElement.classList.add("active");
        }
    }

    // Add click event listener to each tab link
    tabLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove active-link class from all tab links
            tabLinks.forEach(link => link.classList.remove("active-link"));
            // Add active-link class to the clicked tab link
            this.classList.add("active-link");
            // Show the corresponding tab content
            showTabContent(this);
        });
    });

    // Activate the first tab by default
    if (tabLinks.length > 0) {
        tabLinks[0].click();
    }
}
tabShow();

const sideMenu = document.getElementById('sidemenu');
function openMenu() {
    sideMenu.style.right = '0';
}
function closeMenu() {
    sideMenu.style.right = '-200px';
}

function downloadResume() {
    const btn = document.querySelector(".resume-btn");
    btn.addEventListener("click", function () {
        const a = document.createElement("a");
        a.href = "assets/images/harshitaresume%20.pdf";
        a.download = "harshitaresume.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}
downloadResume();