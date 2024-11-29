const form = document.querySelector(".php-email-form");

form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent form submission

    const formData = {
        service_id: "service_gijaliq",
        template_id: "template_7tsjz8c",
        user_id: "FKT6JIMh5mgpKqEyH", // Your public key
        template_params: {
            from_name: document.querySelector("#name-field").value,
            from_email: document.querySelector("#email-field").value,
            subject: document.querySelector("#subject-field").value,
            message: document.querySelector("#message-field").value,
        },
    };

    // Show loading indicator
    Swal.fire({
        title: "Sending...",
        text: "Please wait while your message is being sent.",
        allowOutsideClick: false,
        didOpen: () => Swal.showLoading(),
    });

    // Make the AJAX call
    fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })
        .then((response) => {
            if (response.ok) {
                // Success alert
                Swal.fire({
                    icon: "success",
                    title: "Message Sent",
                    text: "Your message has been sent successfully!",
                });
                form.reset(); // Reset form
            } else {
                return response.json().then((error) => {
                    throw new Error(error);
                });
            }
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
