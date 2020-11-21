
var modalOverlay= document.querySelector("#modal-overlay");
var modal = document.querySelector("#modal");
var openButton= document.querySelector("#open-button");
var closeButton= document.querySelector("#close-button");
var cancelButton=document.querySelector("#btn-red");

openButton.addEventListener("click", function(){
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

closeButton.addEventListener("click", function(){
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});

cancelButton.addEventListener("click", function(){
  modal.classList.toggle("closed");
  modalOverlay.classList.toggle("closed");
});
