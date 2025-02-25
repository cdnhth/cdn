const CORRECT_USERNAME = "Koen";
const CORRECT_PASSWORD = "Test";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        message.style.color = "green";
        message.textContent = "Succesvol ingelogd!";
        
        // Wacht 1,5 sec en stuur door naar lander.howtohack.nl
        setTimeout(() => {
            window.location.href = "https://rijndam.wixsite.com/dashboard";
        }, 1500);
    } else {
        message.style.color = "red";
        message.textContent = "Onjuiste inloggegevens!";
    }
}
