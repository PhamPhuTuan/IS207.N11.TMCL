// Exercise 2.1
var button21 = () => {
  document.getElementById("submit").textContent = "Submited";
};

// Exercise 2.3
var myform = document.getElementById("myform");

var form = document.createElement("form");

var myinput = document.createElement("input");
myinput.setAttribute("type", "text");
myinput.setAttribute("name", "FullName");
myinput.setAttribute("placeholder", "Full Name");

var button = document.getElementById("submit");

form.appendChild(myinput);
form.appendChild(button);

myform.appendChild(form);

// Exercise 2.4
var myform = document.getElementById("calDoB");

var form = document.createElement("form");

var myinput = document.createElement("input");
myinput.setAttribute("type", "text");
myinput.setAttribute("name", "FullName");
myinput.setAttribute("placeholder", "Your BirthDay");

var s = document.createElement("input");
s.setAttribute("type", "submit");
s.setAttribute("value", "CAL");

form.appendChild(myinput);
form.appendChild(s);

s.addEventListener("click", () => {
  var dob = new Date(myinput.value);
  var month_diff = Date.now() - dob.getTime();
  var age_dt = new Date(month_diff);
  var year = age_dt.getUTCFullYear();
  var age = Math.abs(year - 1970);
  alert("Age is: " + age + " years. ");
});

myform.appendChild(form);

// Exercise 2.5
highlight = () => {
  var a = document.getElementById("myTag");
  a.style.color = "red";
};

return_normal = () => {
  var a = document.getElementById("myTag");
  a.style.color = "green";
};

// Exercise 2.6
function getSize() {
  var w = document.documentElement.clientWidth;
  var h = document.documentElement.clientHeight;
  document.getElementById("wh").innerHTML =
    "<h3>Width: " + w + " and Height: " + h + "</h3>";
}
