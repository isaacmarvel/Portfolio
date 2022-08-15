function openMenu() {
  let x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function validateForm() {
  let x = document.forms["myForm"]["name"].value;
  let y = document.forms["myForm"]["email"].value;
  if (x == "" && y == "") {
    alert("Name and email must be entered");
  } else if (y == "") {
    alert("Email must be entered");
  } else if (x == "") {
    alert("Name must be entered");
  } else if (y != "") {
    if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.email.value)
    ) {
      alert(
        "Thank you for reaching out, " +
          x +
          "! I'll get back to you as soon as I can"
      );
      return true;
    }
    {
      alert("You have entered an invalid email address");
      return false;
    }
  }
}
