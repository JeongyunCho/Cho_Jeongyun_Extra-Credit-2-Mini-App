<?php
require 'connect.php';


function get_car_data($pdo, $name)
{
  $query = "SELECT * FROM `mainmodel`where model='$name'" ;
  $get_data = $pdo->query($query);
  $results = array();
  while ($row = $get_data->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

?>