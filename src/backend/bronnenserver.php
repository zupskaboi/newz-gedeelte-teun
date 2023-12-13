<?php
header('Access-Control-Allow-Origin:  http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');


$servername = "sql108.byethost7.com"; 
$username = "b7_35521629";
$password = "newznederland1";
$dbname = "b7_35521629_newzdata";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connectie mislukt: " . $conn->connect_error);
}

$result = $conn->query("SELECT * FROM bronnen");

$data = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

$conn->close();

echo json_encode($data);
?>
