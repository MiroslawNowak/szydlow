// Pobieranie elementów modala i zdjęć
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

// Pobieranie wszystkich zdjęć z klasą gallery-image
var images = document.getElementsByClassName("gallery-image");

// Iteracja po wszystkich zdjęciach
for (var i = 0; i < images.length; i++) {
    images[i].onclick = function(){
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.dataset.caption; // Pobranie opisu zdjęcia z atrybutu data-caption
    }
}

// Po kliknięciu na przycisk zamknięcia, zamykamy modal
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}