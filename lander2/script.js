const CORRECT_USERNAME = "Koen";
const CORRECT_PASSWORD = "Test";

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let message = document.getElementById("message");

    // Check of de gebruikersnaam en het wachtwoord correct zijn
    if (username === CORRECT_USERNAME && password === CORRECT_PASSWORD) {
        message.style.color = "green";
        message.textContent = "Succesvol ingelogd!";
        
        // Wacht 1,5 sec en stuur door naar het dashboard
        setTimeout(() => {
            window.location.href = "https://lander.howtohack.nl/"; // Doorgaan naar de URL
        }, 1500); // 1,5 seconde wachten voor de doorverwijzing
    } else {
        message.style.color = "red";
        message.textContent = "Onjuiste inloggegevens!"; // Foutmelding als de gegevens verkeerd zijn
    }
}
