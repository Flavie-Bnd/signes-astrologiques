function getSigneAstrologique(birthday) {
    const year = birthday.getFullYear();
    
    const signes = [
    { name: "Capricorne", start: new Date(year, 11, 23), end: new Date(year + 1, 0, 20) },
    { name: "Verseau", start: new Date(year, 0, 21), end: new Date(year, 1, 19) },
    { name: "Poissons", start: new Date(year, 1, 20), end: new Date(year, 2, 20) },
    { name: "Bélier", start: new Date(year, 2, 21), end: new Date(year, 3, 20) },
    { name: "Taureau", start: new Date(year, 3, 21), end: new Date(year, 4, 21) },
    { name: "Gémeaux", start: new Date(year, 4, 22), end: new Date(year, 5, 21) },
    { name: "Cancer", start: new Date(year, 5, 22), end: new Date(year, 6, 22) },
    { name: "Lion", start: new Date(year, 6, 23), end: new Date(year, 7, 22) },
    { name: "Vierge", start: new Date(year, 7, 23), end: new Date(year, 8, 22) },
    { name: "Balance", start: new Date(year, 8, 23), end: new Date(year, 9, 22) },
    { name: "Scorpion", start: new Date(year, 9, 23), end: new Date(year, 10, 22) },
    { name: "Sagittaire", start: new Date(year, 10, 23), end: new Date(year, 11, 21) },
    ];

    for (const signe of signes) {
    if (birthday >= signe.start && birthday <= signe.end) {
        return signe.name;
    }
    }
    return "Capricorne"; 
}

function viewSigneAstrologique() {
    const input = document.getElementById("birthday").value;
    if (input) {
    const birthday = new Date(input);
    const signe = getSigneAstrologique(birthday

    );
    document.getElementById("result").textContent = `Votre signe astrologique est : ${signe}`;
    } else {
    document.getElementById("result").textContent = "Veuillez entrer une date valide.";
    }
}