var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
var userPass = document.getElementById("userPass");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");

//
//
// Home
//
//
function home() {
  var mainUserName = localStorage.getItem("userNameContainer");
  document.getElementById("HomeUsername").innerHTML = mainUserName;
}
//
//

if (localStorage.getItem("userContainer") !== null) {
  var userList = JSON.parse(localStorage.getItem("userContainer"));
} else {
  var userList = [];
}
var user = {
  name: userName.value,
  email: userEmail.value,
  pass: userPass.value,
};

//
//
// signUp
//
//
// for check email is repeated
function isEmailRepeated() {
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email == userEmail.value) {
      return false;
    }
  }
}

//for check inputs is empty or not
function isEmpty() {
  if (userName.value == "" || userEmail.value == "" || userPass.value == "") {
    return false;
  } else {
    return true;
  }
}

function addData() {
  if (isEmpty() == false) {
    document.getElementById("message").innerHTML =
      '<span class="text-danger m-3"> You must fill out all the inputs</span>';
    return false;
  }
  // to store all value
  var user = {
    name: userName.value,
    email: userEmail.value,
    pass: userPass.value,
  };
  if (userList.length == 0) {
    userList.push(user);
    localStorage.setItem("userContainer", JSON.stringify(userList));
    document.getElementById("message").innerHTML =
      '<span class="text-success m-3">Success</span>';
    return true;
  }
  if (isEmailRepeated() == false) {
    document.getElementById("message").innerHTML =
      '<span class="text-danger m-3">Email repeated Enter new email</span>';
  } else {
    userList.push(user);
    localStorage.setItem("userContainer", JSON.stringify(userList));
    document.getElementById("message").innerHTML =
      '<span class="text-success m-3">Success</span>';
  }
}

//
//
// login
//
//
//for check inputs is empty or not
function isSigninEmpty() {
  if (loginEmail.value == "" || loginPassword.value == "") {
    return false;
  } else {
    return true;
  }
}

function signinAddData() {
  if (isSigninEmpty() == false) {
    document.getElementById("loginMsg").innerHTML =
      '<span class="text-danger m-3">You must fill out all the inputs</span>';
    return false;
  }
  var password = loginPassword.value;
  var email = loginEmail.value;
  for (var i = 0; i < userList.length; i++) {
    if (userList[i].email == email && userList[i].pass == password) {
      console.log(userList[i].name);

      localStorage.setItem("userNameContainer", userList[i].name);

      window.location = "https://mohamed-hosny1.github.io/login/home.html";
    } else {
      document.getElementById("loginMsg").innerHTML =
        '<span class="p-2 text-danger">incorrect email or password</span>';
    }
  }
}

// logout
function logout() {
  localStorage.removeItemItem("userNameContainer");
}
