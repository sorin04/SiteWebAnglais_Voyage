// Fonction pour charger une image dynamique
function loadDynamicImage(imageURL) {
    // Sélectionner l'élément du carousel pour l'image dynamique
    var dynamicImageItem = document.querySelector("#dynamicImage");
    // Mettre à jour l'URL de l'image
    dynamicImageItem.style.backgroundImage = "url(" +tirana.jpg+ ")";
}

// Appeler la fonction pour charger une image dynamique
var dynamicImageURL = "assets/img/tirana.jpg"; // Remplacez "assets/img/s.jpg" par l'URL de votre image dynamique
loadDynamicImage(dynamicImageURL);