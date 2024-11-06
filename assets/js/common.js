let shareButton = document.getElementById("share-button");
let socialButtons = document.getElementById("social-buttons");

shareButton.addEventListener("click", ToggleShare);

function ToggleShare (){
    console.log('working')

    shareButton.classList.toggle('active');
    socialButtons.classList.toggle('show');
}