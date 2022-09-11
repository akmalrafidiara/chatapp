<?php
$conn = mysqli_connect('localhost', 'root', '', '2021_chatapp');
if (!$conn) {
    echo "Database Disconnected - " . mysqli_connect_error();
}