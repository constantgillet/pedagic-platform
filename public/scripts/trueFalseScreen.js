const startButton = document.querySelector(".next__game__button ");
const closeModal = document.querySelector(".student__false__zone");
console.log(closeModal)
startButton.addEventListener("click", () => {
    closeModal.classList.toggle("is-active");
});