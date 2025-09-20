<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "template_undangan_db";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $email = $_POST['email'];
    $kehadiran = $_POST['kehadiran'];

    $sql = "INSERT INTO guest (nama, email, kehadiran) VALUES ('$nama', '$email', '$kehadiran')";
    if ($conn->query($sql) === TRUE) {
        echo 'sukses';
    } else {
        echo "error : " . $conn->error;
    }
}

$conn->close();
?>