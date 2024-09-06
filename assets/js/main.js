document.getElementById('nextBtn-1').addEventListener('click', function () {
    document.getElementById('section-1').classList.remove('active');
    document.getElementById('section-2').classList.add('active');
});

document.getElementById('nextBtn-2').addEventListener('click', function () {
    document.getElementById('section-2').classList.remove('active');
    // Move to the next section accordingly
});