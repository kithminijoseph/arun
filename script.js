// Set target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2024-09-21T07:55:00").getTime();

// Elements
const countdown = document.getElementById("countdown");
const content = document.getElementById("content");
const countdownContainer = document.getElementById("countdown-container");

// Update countdown every second
const updateCountdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    countdown.innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`;

    // If the countdown is over, show the content and stop the countdown
    if (timeLeft < 0) {
        clearInterval(updateCountdown);
        countdownContainer.style.display = "none"; // Hide countdown
        content.classList.remove("hidden"); // Show content
        startConfetti(); // Trigger confetti when countdown reaches zero
    }
}, 1000);

jQuery("document").ready(function($) {
    var flakes = '';

    // Function to generate random pastel colors
    function getRandomPastelColor() {
        var r = Math.floor(Math.random() * 128 + 127);
        var g = Math.floor(Math.random() * 128 + 127);
        var b = Math.floor(Math.random() * 128 + 127);
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }

    // Generate confetti
    for (var i = 0, len = 400; i < len; i++) {
        var randomColor = getRandomPastelColor();
        flakes += '<div class="ball" style="background: ' + randomColor;
        flakes += '; animation-duration: ' + (Math.random() * 9 + 2) + 's; animation-delay: ';
        flakes += (Math.random() * 2 + 0) + 's;"></div>';
    }
    
    $('#confetti').html(flakes);

    // Function to start the confetti
    function startConfetti() {
        $('#confetti').show();
        setTimeout(stopConfetti, 10000); // Stop confetti after 10 seconds
    }

    // Function to stop the confetti
    function stopConfetti() {
        $('#confetti').hide();
    }
});

// Wavy text animation
const text = document.getElementById("wavy-text");
const letters = text.textContent.split("");

text.innerHTML = letters.map((letter, i) => {
    return `<span style="animation-delay: ${i * 50}ms;">${letter}</span>`;
}).join(" ");

