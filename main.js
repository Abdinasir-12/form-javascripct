// Hel xogta isticmaalaha
var name = prompt("Fadlan geli magacaaga:");
var address = prompt("Fadlan geli cinwaankaaga:");
var phone = prompt("Fadlan geli lambarkaaga telefoonka:");

// Hubi in dhammaan xogta la buuxiyey
if (name && address && phone) {
    // Ku soo daabac xogta bogga
    document.write("<h2>Macluumaadkaaga:</h2>");
    document.write("<p><strong>Magaca:</strong> " + name + "</p>");
    document.write("<p><strong>Cinwaanka:</strong> " + address + "</p>");
    document.write("<p><strong>Lambarka Telefoonka:</strong> " + phone + "</p>");
} else {
    document.write("<p>Fadlan buuxi dhammaan macluumaadka la codsaday!</p>");
}
