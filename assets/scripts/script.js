$('input[type="radio"]').prop("checked", false);
$("form").find("input").not(":button, :submit, :reset, :hidden").val("");
$("form").find("select").val("");
// backBrow();
const mod_bnt_1 = document.querySelector("#mod_btn_1");
const mod_bnt_2 = document.querySelector("#mod_btn_2");
const mod_bnt_3 = document.querySelector("#mod_btn_3");

const mod_wind_1 = document.querySelector("#mod_wind_1");
const mod_wind_2 = document.querySelector("#mod_wind_2");
const mod_wind_3 = document.querySelector("#mod_wind_3");

const mod_wind_close_1 = document.querySelector("#mod_wind_close_1");

const submit_button = document.querySelector(".submit-button");

mod_bnt_1.onclick = function (e) {
  e.preventDefault();
  mod_wind_1.style.display = "block";
};
mod_bnt_2.onclick = function (e) {
  e.preventDefault();
  mod_wind_2.style.display = "block";
};
mod_bnt_3.onclick = function (e) {
  e.preventDefault();
  mod_wind_3.style.display = "block";
};
mod_wind_close_1.onclick = function (e) {
  e.preventDefault();
  mod_wind_1.style.display = "none";
};
mod_wind_close_2.onclick = function (e) {
  e.preventDefault();
  mod_wind_2.style.display = "none";
};
mod_wind_close_3.onclick = function (e) {
  e.preventDefault();
  mod_wind_3.style.display = "none";
};
function check_text(id) {
  let item = document.getElementById(id);
  if (id == "firstname") {
    if (item.value == "") {
      item.style.borderBottomColor = "#c71414";
      item.style.borderBottomWidth = "2px";
      document.querySelector(".status_firstname").style.display = "block";
    } else {
      item.style.borderBottomColor = "#677073";
      item.style.borderBottomWidth = "1px";
      document.querySelector(".status_firstname").style.display = "none";
      document.querySelector("#label_firstname").style.top = "0px";
      document.querySelector("#label_firstname").style.fontSize = "12px";
    }
  } else if (id == "lastname") {
    if (item.value == "") {
      item.style.borderBottomColor = "#c71414";
      item.style.borderBottomWidth = "2px";
      document.querySelector(".status_lastname").style.display = "block";
    } else {
      item.style.borderBottomColor = "#677073";
      item.style.borderBottomWidth = "1px";
      document.querySelector(".status_lastname").style.display = "none";
      document.querySelector("#label_lastname").style.top = "0px";
      document.querySelector("#label_lastname").style.fontSize = "12px";
    }
  } else if (id == "email") {
    if (item.value != "") {
      document.querySelector("#label_email").style.top = "0px";
      document.querySelector("#label_email").style.fontSize = "12px";
    }
    if (!validateEmail(item.value)) {
      item.style.borderBottomColor = "#c71414";
      item.style.borderBottomWidth = "2px";
      document.querySelector(".status_email").style.display = "block";
    } else {
      item.style.borderBottomColor = "#677073";
      item.style.borderBottomWidth = "1px";
      document.querySelector(".status_email ").style.display = "none";
    }
  } else if (
    (id = "dayofbirth" || id == "monthofbirth" || id == "yearofbirth")
  ) {
    if (
      document.getElementById("dayofbirth").value != "" &&
      document.getElementById("monthofbirth").value != "" &&
      document.getElementById("yearofbirth").value != ""
    ) {
      document.querySelector(".status_dayofbirth").style.display = "none";
      item.style.borderBottomWidth = "1px";
      item.style.borderBottomColor = "#677073";
      item.style.backgroundColor = "transparent";
    } else if ((id = "dayofbirth")) {
      if (item.value != "") {
        item.style.borderBottomWidth = "1px";
        item.style.borderBottomColor = "#677073";
        item.style.backgroundColor = "transparent";
      }
    } else if ((id = "monthofbirth")) {
      console.log(item);
      if (item.value != "") {
        item.style.borderBottomWidth = "1px";
        item.style.borderBottomColor = "#677073";
        item.style.backgroundColor = "transparent";
      }
    } else if ((id = "yearofbirth")) {
      if (item.value != "") {
        item.style.borderBottomWidth = "1px";
        item.style.borderBottomColor = "#677073";
        item.style.backgroundColor = "transparent";
      }
    }
  }
  if (isCheck("gender")) {
    label_gender_male.style.borderColor = "#1779ba";
    label_gender_female.style.borderColor = "#1779ba";
    label_gender_male.style.borderWidth = "1px";
    label_gender_female.style.borderWidth = "1px";
  }
}
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
submit_button.onclick = function check_btn() {
  let firstname = document.getElementById("firstname");
  let lastname = document.getElementById("lastname");
  let email = document.getElementById("email");
  let dayofbirth = document.getElementById("dayofbirth");
  let monthofbirth = document.getElementById("monthofbirth");
  let yearofbirth = document.getElementById("yearofbirth");
  let label_gender_male = document.getElementById("label_gender_male");
  let label_gender_female = document.getElementById("label_gender_female");

  if (dayofbirth.value == "") {
    dayofbirth.style.borderBottomWidth = "2px";
    dayofbirth.style.borderBottomColor = "#c71414";
    dayofbirth.style.backgroundColor = "#faebeb";
    document.querySelector(".status_dayofbirth").style.display = "block";
  }
  if (monthofbirth.value == "") {
    monthofbirth.style.borderBottomWidth = "2px";
    monthofbirth.style.borderBottomColor = "#c71414";
    monthofbirth.style.backgroundColor = "#faebeb";
    document.querySelector(".status_dayofbirth").style.display = "block";
  }
  if (yearofbirth.value == "") {
    yearofbirth.style.borderBottomWidth = "2px";
    yearofbirth.style.borderBottomColor = "#c71414";
    yearofbirth.style.backgroundColor = "#faebeb";
    document.querySelector(".status_dayofbirth").style.display = "block";
  }
  if (firstname.value == "") {
    firstname.style.borderBottomWidth = "2px";
    firstname.style.borderBottomColor = "#c71414";
    document.querySelector(".status_firstname").style.display = "block";
  }
  if (lastname.value == "") {
    lastname.style.borderBottomWidth = "2px";
    lastname.style.borderBottomColor = "#c71414";
    document.querySelector(".status_lastname").style.display = "block";
  }
  if (email.value == "") {
    email.style.borderBottomWidth = "2px";
    email.style.borderBottomColor = "#c71414";
    document.querySelector(".status_email").style.display = "block";
  }
  if (!isCheck("gender")) {
    label_gender_male.style.borderColor = "#c71414";
    label_gender_female.style.borderColor = "#c71414";
    label_gender_male.style.borderWidth = "2px";
    label_gender_female.style.borderWidth = "2px";
  }

  if (
    firstname.value == "" &&
    lastname.value == "" &&
    email.value == "" &&
    dayofbirth.value == "" &&
    monthofbirth.value == "" &&
    yearofbirth.value == ""
  ) {
    return false;
  }
};
function isCheck(name) {
  return document.querySelector('input[name="' + name + '"]:checked');
}

window.onload = function () {
  history.pushState(null,null, '');
  window.setTimeout(function () {
    window.addEventListener(
      "popstate",
      function (e) {
        e.preventDefault();
        
        document.location.href = "https://www.google.com/";
      },
      false
    );
  }, 1);
};
