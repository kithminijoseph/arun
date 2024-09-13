// Set target date and time (YYYY-MM-DDTHH:MM:SS format)
const targetDate = new Date("2024-09-20T09:00:00").getTime();

// Elements
const countdownContainer = document.getElementById("countdown");
const contentContainer = document.getElementById("content");
const countdownWrapper = document.getElementById("countdown-container");

// Update countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Display the countdown
    countdownContainer.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // If the countdown is over, show the content and stop the countdown
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownWrapper.style.display = "none"; // Hide countdown
        contentContainer.classList.remove("hidden"); // Show content
    }
}, 1000);
