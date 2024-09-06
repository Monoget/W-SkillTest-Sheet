document.getElementById('nextBtn-1').addEventListener('click', function () {
    document.getElementById('section-1').classList.remove('active');
    document.getElementById('section-2').classList.add('active');
});

document.getElementById('submit').addEventListener('click', function () {
    document.getElementById('section-2').classList.remove('active');
    document.getElementById('section-3').classList.add('active');
    // Move to the next section accordingly
});

document.getElementById('clearBtn').addEventListener('click', function() {
    // Reset all input fields
    document.getElementById('multiStepForm').reset();
});
