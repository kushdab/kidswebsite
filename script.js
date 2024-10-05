// script.js

document.getElementById("game-button").addEventListener("click", function() {
    const messages = [
        "Great job! You're doing amazing!",
        "Keep it up! Learning is fun!",
        "You're a superstar!",
        "Let's learn something new!"
    ];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById("game-message").innerText = randomMessage;
});
