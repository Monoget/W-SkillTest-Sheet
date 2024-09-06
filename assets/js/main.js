document.getElementById('nextBtn-1').addEventListener('click', function () {
    // Reset previous errors
    resetErrors();

    // Capture form fields
    var rosName = document.getElementById('ros-name').value;
    var youthId = document.getElementById('youth-id').value;
    var confirmUuid = document.getElementById('confirm-uuid').value;
    var youthName = document.getElementById('youth-name').value;
    var youthGender = document.querySelector('input[name="youth-gender"]:checked');
    var county = document.querySelector('input[name="county"]:checked');

    var isValid = true;

    // Validate ROs Name
    if (!rosName) {
        document.getElementById('ros-name-error').style.display = 'block';
        isValid = false;
    }

    // Validate Youth ID
    if (!youthId) {
        document.getElementById('youth-id-error').style.display = 'block';
        isValid = false;
    }

    // Validate Confirm UUID
    if (!confirmUuid) {
        document.getElementById('confirm-uuid-error').style.display = 'block';
        isValid = false;
    }

    // Validate Youth Name
    if (!youthName) {
        document.getElementById('youth-name-error').style.display = 'block';
        isValid = false;
    }

    // Validate Youth Gender
    if (!youthGender) {
        document.getElementById('youth-gender-error').style.display = 'block';
        isValid = false;
    }

    // Validate County
    if (!county) {
        document.getElementById('county-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        document.getElementById('section-1').style.display = 'none';
        document.getElementById('section-2').style.display = 'block';
    }
});

document.getElementById('submit').addEventListener('click', function () {
    // Reset previous errors
    resetErrors();

    // Capture form fields for Section 2
    var callPurpose = document.querySelector('input[name="call-purpose"]:checked');

    var isValid = true;

    // Validate Call Purpose
    if (!callPurpose) {
        document.querySelector('input[name="call-purpose"]').classList.add('is-invalid');
        document.getElementById('call-purpose-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        // Collect data from both sections
        var formData = {
            rosName: document.getElementById('ros-name').value,
            youthId: document.getElementById('youth-id').value,
            confirmUuid: document.getElementById('confirm-uuid').value,
            youthName: document.getElementById('youth-name').value,
            youthGender: document.querySelector('input[name="youth-gender"]:checked').value,
            county: document.querySelector('input[name="county"]:checked').value,
            callPurpose: document.querySelector('input[name="call-purpose"]:checked').value
        };

        // Perform AJAX request
        fetch('insert.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Form is valid and data is successfully inserted
                    alert('Form submitted successfully!');
                    document.getElementById('section-2').style.display = 'none';
                    document.getElementById('section-3').style.display = 'block';
                } else {
                    // Handle server-side validation or errors
                    alert('There was an issue with the submission.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while submitting the form.');
            });
    }
});

document.getElementById('clearBtn').addEventListener('click', function () {
    // Reset errors
    resetErrors();

    // Clear form fields in Section 1
    document.getElementById('ros-name').selectedIndex = 0; // Reset the select dropdown
    document.getElementById('youth-id').value = ''; // Clear Youth ID input
    document.getElementById('confirm-uuid').value = ''; // Clear Confirm UUID input
    document.getElementById('youth-name').value = ''; // Clear Youth Name input

    // Uncheck all radio buttons
    document.querySelectorAll('input[name="youth-gender"]').forEach(function (input) {
        input.checked = false;
    });
    document.querySelectorAll('input[name="county"]').forEach(function (input) {
        input.checked = false;
    });
    document.querySelectorAll('input[name="call-status"]').forEach(function (input) {
        input.checked = false;
    });
});

document.getElementById('clearBtn-2').addEventListener('click', function () {
    // Reset errors
    resetErrors();

    // Clear all fields in Section 2
    document.querySelectorAll('input[name="call-purpose"]').forEach(function (input) {
        input.checked = false;
    });
});

function resetErrors() {
    var invalidElements = document.querySelectorAll('.is-invalid');
    invalidElements.forEach(function (element) {
        element.classList.remove('is-invalid');
    });

    var errorMessages = document.querySelectorAll('.invalid-feedback');
    errorMessages.forEach(function (message) {
        message.style.display = 'none';
    });
}
