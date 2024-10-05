document.getElementById("game-button").addEventListener("click", function() {
    const message = document.getElementById("game-message");
    message.textContent = "Yay! You played the game!";
    message.style.color = "#ff3366";
    message.style.fontSize = "1.5em";
});
