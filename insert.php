<?php
header('Content-Type: application/json');

require_once("include/dbcontroller.php");

// Create an instance of the dbcontroller
$db_handle = new dbcontroller();

try {
    // Read and decode the JSON input
    $input = file_get_contents('php://input');
    $decodedInput = json_decode($input, true);

    // Check for JSON errors
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception('Invalid JSON data');
    }

    // Access the 'data' key
    $data = $decodedInput['data'];

    // Get and sanitize input values
    $rosName = $db_handle->checkValue($data['rosName']);
    $youthId = $db_handle->checkValue($data['youthId']);
    $confirmUuid = $db_handle->checkValue($data['confirmUuid']);
    $youthName = $db_handle->checkValue($data['youthName']);
    $youthGender = $db_handle->checkValue($data['youthGender']);
    $county = $db_handle->checkValue($data['county']);
    $callPurpose = $db_handle->checkValue($data['callPurpose']);

    $inserted_at = date('Y-m-d H:i:s');

    // Prepare SQL statement for insertion
    $sql = "INSERT INTO `sheet` (`ros_name`, `youth_id`, `confirm_uuid`, `youth_name`, `youth_gender`, `county`, `call_purpose`, `inserted_at`) VALUES ('$rosName', '$youthId', '$confirmUuid', '$youthName', '$youthGender', '$county', '$callPurpose', '$inserted_at')";

    // Execute the SQL query
    $result = $db_handle->insertQuery($sql);

    if ($result) {
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Failed to insert data.']);
    }
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
?>
