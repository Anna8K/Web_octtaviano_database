<?php
// Connect to the database
$conn = new mysqli('localhost', 'root', '', 'login');

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the posted data
$email = $_POST['email'];
$password = $_POST['password'];


// Print out the username and password for debugging
var_dump($email);
var_dump($password);


// Query the database
$sql = "SELECT * FROM usuarios WHERE email='$email' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "Login successful!";
} else {
    echo "Invalid username or password!";
}

// Close the connection
$conn->close();
?>
