document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("message").innerText = "Message sent successfully!";
});
