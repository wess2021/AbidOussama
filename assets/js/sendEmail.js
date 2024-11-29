document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const formData = {
            name: document.querySelector("#name-field").value,
            email: document.querySelector("#email-field").value,
            subject: document.querySelector("#subject-field").value,
            message: document.querySelector("#message-field").value,
        };

        // Show a SweetAlert2 loading message
        Swal.fire({
            title: "Sending...",
            text: "Please wait while your message is being sent.",
            allowOutsideClick: false,
            didOpen: () => Swal.showLoading(),
        });

        // Use jQuery's $.ajax to send the form data
        $.ajax({
            url: "https://api.emailjs.com/api/v1.0/email/send", // EmailJS endpoint
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({
                service_id: "service_gijaliq",
                template_id: "template_7tsjz8c",
                user_id: "FKT6JIMh5mgpKqEyH", // Your public key
                template_params: formData,
            }),
            success: function () {
                Swal.fire({
                    icon: "success",
                    title: "Message Sent!",
                    text: "Your message has been sent successfully!",
                });
                form.reset(); // Reset the form after success
            },
            error: function (error) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "Failed to send the message. Please try again later.",
                });
                console.error("Error:", error);
            },
        });
    });
});
