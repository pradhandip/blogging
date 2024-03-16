// script.js

function loadContent(page) {
    const contentContainer = document.getElementById('content');

    // Fetch content based on the selected page
    fetch(`pages/${page}.html`)
        .then(response => response.text())
        .then(html => {
            contentContainer.innerHTML = html;
        })
        .catch(error => console.error('Error loading content:', error));
}

// Function to initialize the default content on page load
function initializeDefaultContent() {
    loadContent('home');
}

// Initialize default content when the page loads
document.addEventListener('DOMContentLoaded', initializeDefaultContent);



function scrollToTop() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Function to show/hide the "Tap to Top" button based on scroll position
function toggleScrollToTopButton() {
    const button = document.getElementById('scrollToTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
}

// Add an event listener to toggle the button on scroll
document.addEventListener('scroll', toggleScrollToTopButton);




//FAQ section


//share now



//for downloading the pdf
function downloadBook(downloadLink, fileName) {
    var link = document.createElement('a');
    link.href = downloadLink;
    link.download = fileName + '.pdf';

    if (typeof link.download === 'undefined') {
        // Browser does not support the download attribute
        showAlert('Your browser does not support the download feature. Please try another browser.');
        return;
    }

    document.body.appendChild(link);

    try {
        link.click();
        document.body.removeChild(link);
        showAlert('Successfully Downloaded :)');
    } catch (error) {
        // Download failed
        showAlert('Download failed. Please try again.');
        console.error('Download failed:', error);
        document.body.removeChild(link);
    }
}

function showAlert(message) {
    var alertBox = document.getElementById('custom-alert');
    var alertMessage = document.getElementById('alert-message');
    alertMessage.textContent = message;
    alertBox.classList.add('show-alert');

    // Automatically hide the alert after a few seconds
    setTimeout(function() {
        alertBox.classList.remove('show-alert');
    }, 3000); // Adjust the timeout (in milliseconds) as needed
}




// read the PDF

function readBook(pdfLink) {
    // Open the PDF in a new tab without download or print options
    window.open(`${pdfLink}#toolbar=0&navpanes=0&scrollbar=0`, '_blank', 'noopener,noreferrer');
}



//toggle menu for header

function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('show');
}

// Close the menu when a menu item is clicked
document.querySelectorAll('#navMenu ul li a').forEach(item => {
    item.addEventListener('click', () => {
        const navMenu = document.getElementById('navMenu');
        navMenu.classList.remove('show');
    });
});

// Close the menu when clicking outside the menu
document.addEventListener('click', (event) => {
    const navMenu = document.getElementById('navMenu');
    if (!navMenu.contains(event.target) && !event.target.classList.contains('menu-icon')) {
        navMenu.classList.remove('show');
    }
});


///for responsive header

const navBar = document.querySelector("#new_nav"),
  menuBtns = document.querySelectorAll(".menu_icon"),
  overlay = document.querySelector(".overlay");

menuBtns.forEach((menuBtn) => {
  menuBtn.addEventListener("click", () => {
    navBar.classList.toggle("open");
  });
});

overlay.addEventListener("click", () => {
  navBar.classList.remove("open");
});
