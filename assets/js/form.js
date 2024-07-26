$("#submit-form").submit((e) => {
  e.preventDefault();
  const loadMessage = $(".loading");
  const errorMessage = $(".error-message");
  const sentMessage = $(".sent-message");
  loadMessage.removeClass("d-none").addClass("d-block");
  $.ajax({
    url: "https://script.google.com/macros/s/AKfycbyK2zfAWz7bLdhyvxdc3XkOLxD6LrtdiyShauW9tWRI78_mcPdHuIU0MnzMG0Hr0eMx/exec",
    data: $("#submit-form").serialize(),
    method: "post",
    success: function (response) {
      loadMessage.removeClass("d-block").addClass("d-none");
    },
    error: function (err) {
      errorMessage.removeClass("d-none").addClass("d-block");
    },
    complete: function () {
      sentMessage.removeClass("d-none").addClass("d-block");
    },
  });
});

//Name validation for restricting to use only alphabets
function validateInput() {
  var input = document.getElementById("name");
  input.value = input.value.replace(/[^a-zA-Z]/g, "");
}

//Email validation on mouseleave
$(document).ready(function () {
  $("#email").on("mouseleave", function () {
    const email = $(this).val();
    const $invalidFeedback = $(this).next(".invalid-feedback");

    if (!email.endsWith("@gmail.com")) {
      $invalidFeedback.text("Please provide a valid Gmail email address.");
      $(this).addClass("is-invalid");
    } else {
      $invalidFeedback.text("");
      $(this).removeClass("is-invalid");
    }
  });
});
