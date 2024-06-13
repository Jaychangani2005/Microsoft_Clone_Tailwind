function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// <!-- Navbar responsive -->
function showSlider() {
    const sidebar = document.querySelector('.sidebar')
    const three_line = document.querySelector('.three_line')

    if (sidebar.style.display == 'flex') {
        sidebar.style.display = 'none'
        three_line.style.background = "url('/image/menu_FILL0_wght400_GRAD0_opsz24.svg')"
    }
    else {
        sidebar.style.display = 'flex'
        three_line.style.background = "url('/image/close_FILL0_wght400_GRAD0_opsz24.svg')"
    }
}




// <!-- OnLoad massage script -->
// Function to show the custom message overlay
function showCustomMessage() {
    document.getElementById('customMessageOverlay').style.display = 'flex';
}

// Function to close the custom message overlay
function closeCustomMessage() {
    document.getElementById('customMessageOverlay').style.display = 'none';
}

// Call the showCustomMessage function when the page loads
window.onload = showCustomMessage;
