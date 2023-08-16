$(document).ready(function () {
  var buttons = $(".accordion");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }

      this.children[2].classList.toggle("invisible");
      this.children[1].classList.toggle("invisible");
    });
  }
});
