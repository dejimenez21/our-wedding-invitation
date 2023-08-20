$(document).ready(function () {
  let btnChurch = document.getElementById("btnChurch");
  let btnClub = document.getElementById("btnClub");

  btnChurch.onclick = (e) => {
    window.open(
      "https://www.google.com/maps/place/Iglesia+Bautista+del+Nuevo+Pacto/@18.4506885,-69.950672,15z/data=!4m6!3m5!1s0x8ea5621c66896f7f:0x38bd4c98f2e6d0e8!8m2!3d18.4506885!4d-69.950672!16s%2Fg%2F11cmsrc9rp?entry=ttu",
      "_blank"
    );
  };

  btnClub.onclick = (e) => {
    window.open(
      "https://www.google.com/maps/place/Dominican+Fiesta+Hotel+Santo+Domingo/@18.439974,-69.9694605,15z/data=!4m9!3m8!1s0x8ea561922f3a6c8b:0xdc3a9f93d5b2968f!5m2!4m1!1i2!8m2!3d18.439974!4d-69.9694605!16s%2Fg%2F11byl6f2_b?entry=ttu",
      "_blank"
    );
  };
});
