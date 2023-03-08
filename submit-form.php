<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // Send email or save to database here

  // Redirect to thank you page
  header('Location: thank-you.php');
  exit;
}
// Replace the placeholders with your own database information
$host = "your_host_name";
$user = "your_database_username";
$password = "your_database_password";
$dbname = "your_database_name";

// Create connection
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";

// SQL query
$sql = "SELECT * FROM customers";

// Execute query and get result set
$result = mysqli_query($conn, $sql);

// Check if there are any rows
if (mysqli_num_rows($result) > 0) {
    // Loop through each row and output data
    while($row = mysqli_fetch_assoc($result)) {
        echo "Name: " . $row["name"]. " - Email: " . $row["email"]. "<br>";
    }
} else {
    echo "0 results";
}

// Free result set
mysqli_free_result($result);

// Close connection
mysqli_close($conn);

?>
