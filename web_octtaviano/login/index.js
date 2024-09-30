document
  .getElementById("login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Validación
    if (email === "" || password === "") {
      document.getElementById("error-message").textContent =
        "Por favor, completa todos los campos.";
      return;
    }

    // Mostrar el loader
    var loaderOverlay = document.getElementById("loader-overlay");
    loaderOverlay.style.opacity = "1";
    loaderOverlay.style.visibility = "visible";

    // Simular un retraso de 3 segundos
    setTimeout(function () {
      // Ocultar el loader
      loaderOverlay.style.opacity = "0";
      loaderOverlay.style.visibility = "hidden";

      // Si la validación pasa, puedes enviar el formulario o realizar otras acciones
      document.getElementById("error-message").textContent = "";
      alert("Formulario enviado correctamente.");
      // Aquí puedes agregar el código para enviar el formulario al servidor
    }, 3000);
  });