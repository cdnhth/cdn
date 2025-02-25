const CORRECT_USERNAME = "admin";
const CORRECT_PASSWORD = "1234";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        message.style.color = "green";
        message.textContent = "Succesvol ingelogd!";
        setTimeout(() => {
            window.location.href = "dashboard.html"; // Stuur door naar dashboard
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Onjuiste inloggegevens!";
    }
}
