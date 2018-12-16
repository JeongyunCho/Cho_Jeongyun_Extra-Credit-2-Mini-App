<?php

require 'functions.php';

if (isset($_GET['modelNo'])) {
    // pass the connection and the movie id to a function
  $data = get_car_data($conn, $_GET['modelNo']);
  echo json_encode($data);
}

?>