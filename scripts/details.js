document.addEventListener('DOMContentLoaded', function() {
    console.log('Countdown script loaded');

    // Set the date and time when the offer ends (2 days from now)
    const endTime = new Date();
    endTime.setDate(endTime.getDate() + 2);

    console.log('End time:', endTime);

    // Update the countdown every second
    const countdown = setInterval(function() {
        // Get current date and time
        const now = new Date().getTime();

        // Calculate the remaining time
        const distance = endTime - now;

        console.log('Distance:', distance);

        // Check if the offer has ended
        if (distance < 0) {
            clearInterval(countdown);
            document.getElementById('countdown').innerHTML = 'Offer has ended!';
            return;
        }

        // Calculate days, hours, minutes, and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown timer
        document.getElementById('countdown').innerHTML = `
            <div class="countdown-number">${days}d ${hours}h ${minutes}m ${seconds}s</div>
        `;
    }, 1000); // Update every second (1000 milliseconds)
});
