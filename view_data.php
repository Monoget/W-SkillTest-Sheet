<?php
// Database connection
require_once("include/dbcontroller.php");
$db_handle = new dbcontroller();

// Fetch data from the `sheet` table
$query = "SELECT * FROM `sheet`";
$result = $db_handle->runQuery($query);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sheet Data</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- DataTables CSS -->
    <link href="https://cdn.datatables.net/1.10.21/css/jquery.dataTables.min.css" rel="stylesheet">
</head>
<body>
<div class="container mt-4">
    <h2 class="mb-4">Sheet Data</h2>
    <table id="dataTable" class="table table-striped table-bordered" style="width:100%">
        <thead>
        <tr>
            <th>SL Number</th>
            <th>ROS Name</th>
            <th>Youth ID</th>
            <th>Confirm UUID</th>
            <th>Youth Name</th>
            <th>Youth Gender</th>
            <th>County</th>
            <th>Call Purpose</th>
            <th>Inserted At</th>
        </tr>
        </thead>
        <tbody>
        <?php
        $sl_number = 1; // Initialize SL number
        foreach ($result as $row) { ?>
            <tr>
                <td><?php echo $sl_number++; ?></td> <!-- Display SL number -->
                <td><?php echo htmlspecialchars($row['ros_name']); ?></td>
                <td><?php echo htmlspecialchars($row['youth_id']); ?></td>
                <td><?php echo htmlspecialchars($row['confirm_uuid']); ?></td>
                <td><?php echo htmlspecialchars($row['youth_name']); ?></td>
                <td><?php echo htmlspecialchars($row['youth_gender']); ?></td>
                <td><?php echo htmlspecialchars($row['county']); ?></td>
                <td><?php echo htmlspecialchars($row['call_purpose']); ?></td>
                <td><?php echo htmlspecialchars($row['inserted_at']); ?></td>
            </tr>
        <?php } ?>
        </tbody>
    </table>
</div>

<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<!-- Bootstrap JS -->
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
<!-- DataTables JS -->
<script src="https://cdn.datatables.net/1.10.21/js/jquery.dataTables.min.js"></script>
<script>
    $(document).ready(function() {
        $('#dataTable').DataTable();
    });
</script>
</body>
</html>
