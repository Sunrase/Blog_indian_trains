// Récupère le bandeau et les images
var bandeau = document.getElementById('bandeau');
var images = document.querySelector('.bandeau-images');

// Fonction pour déplacer les images
function defilementImages() {
  var vitesseDefilement = 1; // Réglage de la vitesse de défilement (1px par itération)

  // Défilement des images
  images.style.transform = 'translateX(' + -vitesseDefilement + 'px)';

  // Réinitialisation lorsque la première image est entièrement sortie du bandeau
  if (images.firstElementChild.clientWidth + images.scrollLeft <= bandeau.clientWidth) {
    images.appendChild(images.firstElementChild);
    images.style.transform = 'translateX(0)';
  }
}

// Démarre le défilement des images à intervalle régulier
setInterval(defilementImages, 1500); // Réglage de l'intervalle de défilement (30ms)
