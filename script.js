function submitForm(event) {
    event.preventDefault();

    // Get the form values
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // You can implement your form submission logic here
    // For example, you can use AJAX to send the form data to a backend server

    // Display the confirmation message with a tick
    var confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.innerHTML = "&#10004; Thank you for your response!";
    confirmationMessage.style.display = "block";

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Hide the confirmation message after 3 seconds
    setTimeout(function() {
        confirmationMessage.style.display = "none";
    }, 3000);
}
