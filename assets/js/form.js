$("#submit-form").submit((e) => {
    e.preventDefault();
  
    // Perform validation
    if (
      !validateName() ||
      !validateEmail() ||
      !validateSubject() ||
      !validateMessage()
    ) {
      alert("Please check the form!");
      return false;
    }
  
    const loadMessage = $(".loading");
    const errorMessage = $(".error-message");
    const sentMessage = $(".sent-message");
  
    // Show loading message
    loadMessage.removeClass("d-none").addClass("d-block");
    errorMessage.removeClass("d-block").addClass("d-none");
    sentMessage.removeClass("d-block").addClass("d-none");
  
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbxzvLCH2DIdfXKKyJbZTLfO85IA8kKaf6N3Efu77B4N16tN1ezNJVdGBVXo0qlDmPHd/exec",
      data: $("#submit-form").serialize(),
      method: "post",
      success: function (response) {
        // Handle successful response
        loadMessage.removeClass("d-block").addClass("d-none");
        sentMessage.removeClass("d-none").addClass("d-block");
      },
      error: function (err) {
        // Handle error response
        loadMessage.removeClass("d-block").addClass("d-none");
        errorMessage.text("An error occurred while sending the message. Please try again.");
        errorMessage.removeClass("d-none").addClass("d-block");
      }
    });
  });
  
  // Name validation
  function validateName() {
    let nameInput = document.getElementById("name");
    let nameError = document.getElementById("invalid-name");
    let name = nameInput.value;
    let nameRegex = /^[a-zA-Z ]{1,20}$/;
  
    if (name === "") {
      nameError.innerText = "";
      return false;
    } else if (!nameRegex.test(name)) {
      nameError.innerText = "Name only contains alphabets and must be 1 to 20 characters long.";
      return false;
    } else {
      nameError.innerText = "";
      return true;
    }
  }
  
  // Email validation
  function validateEmail() {
    let emailInput = document.getElementById("email");
    let email = emailInput.value;
    let emailError = document.getElementById("invalid-email");
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    if (email === "") {
      emailError.innerText = "";
      return false;
    } else if (!emailRegex.test(email)) {
      emailError.innerText = "Please enter a valid email address.";
      return false;
    } else {
      emailError.innerText = "";
      return true;
    }
  }
  
  // Subject validation
  function validateSubject() {
    let subjectInput = document.getElementById("subject");
    let subject = subjectInput.value;
    let subjectError = document.getElementById("invalid-subject");
    let subjectRegex = /^[a-zA-Z0-9 ]{1,100}$/;
  
    if (subject === "") {
      subjectError.innerText = "";
      return false;
    } else if (!subjectRegex.test(subject)) {
      subjectError.innerText = "Subject can only contain alphanumeric characters and spaces, and must be up to 100 characters long.";
      return false;
    } else {
      subjectError.innerText = "";
      return true;
    }
  }
  
  // Message validation
  function validateMessage() {
    let messageInput = document.getElementById("message");
    let message = messageInput.value;
    let messageError = document.getElementById("invalid-message");
    let messageRegex = /^[\s\S]{1,5000}$/;
  
    if (message === "") {
      messageError.innerText = "";
      return false;
    } else if (!messageRegex.test(message)) {
      messageError.innerText = "Message can contain any characters and must be between 1 and 5000 characters long.";
      return false;
    } else {
      messageError.innerText = "";
      return true;
    }
  }
  