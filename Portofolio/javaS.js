document.getElementById("theme-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-theme");
});

document.getElementById("contact-form").addEventListener("submit", function (event) {
  event.preventDefault();
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  if (email && message) {
    alert("Mesazhi juaj është dërguar me sukses! Faleminderit për kontaktin.");
    document.getElementById("contact-form").reset();
  } else {
    alert("Ju lutem plotësoni të gjitha fushat!");
  }
});
