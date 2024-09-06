document.getElementById('nextBtn-1').addEventListener('click', function () {
    // Reset previous errors
    resetErrors();

    // Capture form fields
    var rosName = document.getElementById('ros-name').value;
    var youthId = document.getElementById('youth-id').value;
    var confirmUuid = document.getElementById('confirm-uuid').value;
    var youthName = document.getElementById('youth-name').value;
    var youthGender = document.querySelector('input[name="youthGender"]:checked');
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
    var callPurpose = document.querySelector('input[name="callPurpose"]:checked');

    var isValid = true;

    // Validate Call Purpose
    if (!callPurpose) {
        document.querySelector('input[name="callPurpose"]').classList.add('is-invalid');
        document.getElementById('call-purpose-error').style.display = 'block';
        isValid = false;
    }

    if (isValid) {
        var formData = {
            rosName: document.getElementById('ros-name').value,
            youthId: document.getElementById('youth-id').value,
            confirmUuid: document.getElementById('confirm-uuid').value,
            youthName: document.getElementById('youth-name').value,
            youthGender: document.querySelector('input[name="youthGender"]:checked').value,
            county: document.querySelector('input[name="county"]:checked').value,
            callPurpose: document.querySelector('input[name="callPurpose"]:checked').value
        };

        fetch('insert.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ data: formData }) // Using 'data' as a key
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Form submitted successfully!');
                    document.getElementById('section-2').style.display = 'none';
                    document.getElementById('section-3').style.display = 'block';
                } else {
                    alert('There was an issue with the submission.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
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
    document.querySelectorAll('input[name="youthGender"]').forEach(function (input) {
        input.checked = false;
    });
    document.querySelectorAll('input[name="county"]').forEach(function (input) {
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

document.getElementById('youth-id').addEventListener('blur', function () {
    // Get the UUID value from the input field
    var uuid = this.value.trim();

    if (uuid) {
        // Fetch data based on the UUID
        fetch('fetch_data.php?uuid=' + encodeURIComponent(uuid))
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Populate the form fields with the fetched data
                    document.getElementById('youth-name').value = data.data.youth_name || '';

                    // Set the gender radio button
                    let genderRadios = document.getElementsByName('youthGender');
                    genderRadios.forEach(radio => {
                        if (radio.value === data.data.gender) {
                            radio.checked = true;
                        }
                    });

                    // Set the county radio button
                    let countyRadios = document.getElementsByName('county');
                    countyRadios.forEach(radio => {
                        if (radio.value === data.data.county) {
                            radio.checked = true;
                        }
                    });

                } else {
                    // Handle the case when no record is found
                    alert(data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                alert('An error occurred while fetching the data.');
            });
    }
});



