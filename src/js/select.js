export let select = function () {
  const selectHeader = document.querySelector(".select__header");
  const selectItem = document.querySelectorAll(".select__item");

  selectHeader.addEventListener("click", selectToggle);

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    selectItem.forEach((item) => {
      item.classList.remove("select__item_selected");
    });

    this.classList.add("select__item_selected");
    let text = this.innerText;
    select = this.closest(".select");
    let currentText = select.querySelector(".select__current");
    currentText.value = text;
    select.classList.add("select_selected");
    select.classList.remove("is-active");
  }
};
