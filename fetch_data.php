<?php
require_once("include/dbcontroller.php");

// Create an instance of the dbcontroller
$db_handle = new dbcontroller();

// Get and sanitize input value
$uuid = $db_handle->checkValue($_GET['uuid']);

// Prepare SQL statement for selection
$sql = "SELECT `youth_name`, `county`, `gender` FROM `record` WHERE `uuid` = '$uuid' LIMIT 1";

// Execute the SQL query
$result = $db_handle->runQuery($sql);

// Return JSON response
if ($result && count($result) > 0) {
    echo json_encode(['success' => true, 'data' => $result[0]]);
} else {
    echo json_encode(['success' => false, 'message' => 'No record found for the provided UUID.']);
}
?>
