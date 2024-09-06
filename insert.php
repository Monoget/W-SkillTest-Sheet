<?php
require_once("include/dbcontroller.php");

// Create an instance of the dbcontroller
$db_handle = new dbcontroller();

// Get and sanitize input values
$rosName = $db_handle->checkValue($_POST['rosName']);
$youthId = $db_handle->checkValue($_POST['youthId']);
$confirmUuid = $db_handle->checkValue($_POST['confirmUuid']);
$youthName = $db_handle->checkValue($_POST['youthName']);
$youthGender = $db_handle->checkValue($_POST['youthGender']);
$county = $db_handle->checkValue($_POST['county']);
$callPurpose = $db_handle->checkValue($_POST['callPurpose']);

$inserted_at=date('Y-m-d H:i:s');

// Prepare SQL statement for insertion
$sql = "INSERT INTO `sheet` (`ros_name`, `youth_id`, `confirm_uuid`, `youth_name`, `youth_gender`, `county`, `call_purpose`, `inserted_at`) VALUES ('$rosName', '$youthId', '$confirmUuid', '$youthName', '$youthGender', '$county', '$callPurpose', '$inserted_at')";

// Execute the SQL query
$result = $db_handle->insertQuery($sql);

// Return JSON response
// Return JSON response
if ($result) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Failed to insert data.']);
}

?>
