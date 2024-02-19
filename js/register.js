let username = document.getElementById("username");
let password = document.getElementById("password");
let email = document.getElementById("email");
let signbtn = document.getElementById("sign-up");

signbtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (username.value === "" || password.value === "" || email.value === "") {
    alert("Please fill data");
  } else {
    localStorage.setItem("username", username.value);
    localStorage.setItem("password", password.value);
    localStorage.setItem("email", email.value);

    setTimeout(() => {
      window.location = "login.html";
    }, 1000);
  }
});
