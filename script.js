// Set target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2024-09-23T09:00:00").getTime();

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
    }
}, 1000);

jQuery("document").ready(function($){
    var flakes = '',
    randomColor;
    for(var i = 0, len = 400; i < len; i++) {
    randomColor = Math.floor(Math.random()*16777215).toString(16);
    flakes += '<div class="ball" style="background: #'+randomColor;
    flakes += '; animation-duration: '+(Math.random() * 9 + 2)+'s; animation-delay: ';
    flakes += (Math.random() * 2 + 0)+'s;"></div>';
    }
    document.getElementById('confetti').innerHTML = flakes;
   });


$(document).ready(function() {
    var flakes = '',
        randomColor;

    for (var i = 0, len = 400; i < len; i++) {
        randomColor = Math.floor(Math.random() * 16777215).toString(16);
        flakes += '<div class="ball" style="background: #' + randomColor;
        flakes += '; animation-duration: ' + (Math.random() * 9 + 2) + 's; animation-delay: ';
        flakes += (Math.random() * 2 + 0) + 's;"></div>';
    }
    
    $('#confetti').html(flakes);

    // Function to start the confetti
    function startConfetti() {
        $('#confetti').show();
    }

    // Function to stop the confetti
    function stopConfetti() {
        $('#confetti').hide();
    }

    // Start confetti
    startConfetti();

    // Stop confetti after 10 seconds
    setTimeout(stopConfetti, 10000); // 10000 milliseconds = 10 seconds

    // Countdown Timer
    const targetDate = new Date("2024-09-20T09:00:00").getTime();

    function updateClock() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        $('#digital-clock').text(`${days}d ${hours}h ${minutes}m ${seconds}s`);

        if (timeLeft < 0) {
            clearInterval(clockInterval);
            $('#countdown-container').hide();
            $('#content').removeClass('hidden');
        }
    }

    const clockInterval = setInterval(updateClock, 1000);
});
