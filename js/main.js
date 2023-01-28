const elModal = document.querySelector('.modal');
const elButtonA = document.querySelector('.btn_a');


elButtonA.addEventListener('click', () => {
    elModal.classList.add('show');

});

const elButtonModal = document.querySelector('.btn_modal');

elButtonModal.addEventListener('click', () => {
    elModal.classList.remove('show');
});