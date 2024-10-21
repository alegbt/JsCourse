'use strict';

const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector('.close-modal');

//querySelectorAll x selezionare tutti
const btnsOpenModal = document.querySelectorAll(`.show-modal`);

//quando clicchi 1 box e fa apparire la finestra che e' hidden
const openModal = function () {
  //modal.style.display = `block`//fanno la stessa cosa, qst comando diretto di css
  modal.classList.remove(`hidden`); //rimuovo la class hidden a modal
  overlay.classList.remove(`hidden`);
};

const closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};
// [btnCloseModal, overlay].forEach(element => element.addEventListener(`click`, closeModal)) //qst sopra con il forEach

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener(`click`, openModal);
}

btnCloseModal.addEventListener(`click`, closeModal);

overlay.addEventListener(`click`, closeModal);

//when you press ESC key and modal open
document.addEventListener('keydown', function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    closeModal();
    console.log(`script done`);
  }
});
