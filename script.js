
// Display the current year automatically in the footer
const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML = `
        <p>&copy; ${new Date().getFullYear()} Bhim Prakash Sunuwar.
        All rights reserved.</p>
    `;
}

// Show a welcome message in the browser console
console.log("Welcome to Bhim's Portfolio!");
