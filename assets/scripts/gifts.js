const contentSuffix = "-content";
const selectedClass = "option-selected";
const hideStyle = "none";
const showStyle = "block";

const observerOptions = {
  attributes: true,
};

function callback(mutationList, observer) {
  mutationList.forEach(function (mutation) {
    if (mutation.type === "attributes" && mutation.attributeName === "class") {
      let element = mutation.target;
      let content = document.getElementById(element.id + contentSuffix);

      if (element.classList.contains(selectedClass)) {
        content.style.display = showStyle;
      } else {
        content.style.display = hideStyle;
      }
    }
  });
}

window.onload = (_) => {
  let btnGifts = document.getElementById("btnGifts");
  //   let btnCashOption = document.getElementById("bank-transfer");
  //   let btnRegistryOption = document.getElementById("registry");

  let options = document.getElementsByClassName("gift-option");

  [...options].forEach((option, _, options) => {
    const observer = new MutationObserver(callback);
    observer.observe(option, observerOptions);

    option.onclick = (_) => {
      options.forEach((value) => value.classList.remove(selectedClass));
      option.classList.add(selectedClass);
    };
  });

  btnGifts.onclick = (_) => {
    window.open(
      "https://listaderegalos.casacuesta.com/Event/Daniel-and-Jennifer?utm_source=share",
      "_blank"
    );
  };
};
