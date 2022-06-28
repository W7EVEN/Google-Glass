const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");

const modalControl = (e) => {
  const modalID = e.target.dataset.open || e.target.dataset.close;

  const containerModal = document.getElementById(`container-${modalID}`);
  const modal = document.getElementById(modalID);

  if (e.target.dataset.open) {
    containerModal.style.display = "flex";
    modal.setAttribute("aria-modal", true);
  } else {
    containerModal.style.display = "none";
    modal.removeAttribute("aria-modal");
  }

  modal.focus();
};

openModal.forEach((element) => {
  element.addEventListener("click", modalControl);
});
closeModal.forEach((element) => {
  element.addEventListener("click", modalControl);
});
