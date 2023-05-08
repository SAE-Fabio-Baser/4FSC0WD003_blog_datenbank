const dialogElement = document.querySelector("dialog");

const openButton = document.querySelector("[data-modal-open]");
const closeButton = document.querySelector("[data-modal-close]");

dialogElement.addEventListener("click", (event) => {
    if (event.target === dialogElement) {
        dialogElement.close();
    }
});

openButton.addEventListener("click", () => {
    dialogElement.showModal();
});

closeButton.addEventListener("click", () => {
    dialogElement.close();
});
