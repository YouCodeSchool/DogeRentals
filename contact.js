document
  .querySelector(
    "body > div.contact_area > div > input[type=submit]:nth-child(9)"
  )
  .addEventListener("click", function () {
    var name = document.querySelector("#name").value;
    var email = document.querySelector("#email").value;
    var subject = document.querySelector("#subject").value;
    var message = document.querySelector("#message").value;

    Swal.fire(
      "sent!",
      "name: " +
        name +
        "<br/>" +
        "email: " +
        email +
        "<br/>" +
        "subject: " +
        subject +
        "<br/>" +
        "message: " +
        message +
        "<br/>",
      "success"
    );
  });
