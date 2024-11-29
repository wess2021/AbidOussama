document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".php-email-form");

    // Initialize EmailJS with your public key
    emailjs.init("FKT6JIMh5mgpKqEyH"); // Replace with your actual public key

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = new FormData(form);
        const name = formData.get("name");
        const email = formData.get("email");
        const subject = formData.get("subject");
        const message = formData.get("message");

        // Show loading indicator using SweetAlert2
        Swal.fire({
            title: "Sending...",
            text: "Please wait while your message is being sent.",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        // Use EmailJS to send the email
        emailjs.send("service_gijaliq", "template_7tsjz8c", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
        })
        .then(() => {
            // Success alert
            Swal.fire({
                icon: "success",
                title: "Message Sent",
                text: "Your message has been sent successfully!",
            });
            form.reset(); // Reset the form after success
        })
        .catch((error) => {
            // Error alert
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to send the message. Please try again later.",
            });
            console.error("Email sending error:", error);
        });
    });
});
