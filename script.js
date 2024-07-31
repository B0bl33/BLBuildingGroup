document.addEventListener("DOMContentLoaded", function() {
    try {
        emailjs.init("iii4jsBQGVWFbqM3N"); // Initialize EmailJS with your user ID
        console.log("EmailJS initialized successfully.");
    } catch (error) {
        console.error("EmailJS initialization failed:", error);
        return;
    }

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Log form data
        console.log("Form submission attempt:", new FormData(this));

        // Send the form data using EmailJS
        emailjs.sendForm('service_kdbz0jb', 'template_h8ce5yu', this)
            .then(function(response) {
                console.log("Form submission success:", response.status, response.text);
                alert('Your message has been sent successfully!');
                $('#contactModal').modal('hide'); // Hide the modal after submission
                document.getElementById('contactForm').reset(); // Reset the form
            }, function(error) {
                console.error('Failed to send message:', error);
                alert('There was an error sending your message. Please try again.');
            });
    });
});
