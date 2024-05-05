<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = htmlspecialchars(stripslashes(trim($_POST["name"])));
    $email = htmlspecialchars(stripslashes(trim($_POST["email"])));
    $subject = htmlspecialchars(stripslashes(trim($_POST["subject"])));
    $message = htmlspecialchars(stripslashes(trim($_POST["message"])));

    // Prepare the email
    $to = "ondrej.major@gmail.com"; // Change this to your email address
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // The email body content
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Here are the details:\nName: $name\nEmail: $email\nSubject: $subject\nMessage:\n$message";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
        // Redirect or display a success message
    } else {
        echo "Message sending failed.";
        // Redirect or display an error message
    }
} else {
    // Not a POST request, redirect to the form or display an error
    echo "Error: You must submit the form!";
}
?>
