// Create function to select element
const selectElement = (element) => document.querySelector(element);

// Open and Close nav on click
selectElement('.menu-icons').addEventListener('click', () => {
    selectElement('nav').classList.toggle('active');
});


