$("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyK2zfAWz7bLdhyvxdc3XkOLxD6LrtdiyShauW9tWRI78_mcPdHuIU0MnzMG0Hr0eMx/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            alert("Form submitted successfully")
            // window.location.reload()
            window.location.href="index.html"
        },
        error:function (err){
            alert("Something Error")
        }
    })
})

function validateInput() {
    var input = document.getElementById("name");
    input.value = input.value.replace(/[^a-zA-Z]/g, '');
  }