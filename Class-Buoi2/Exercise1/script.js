// const fs = require('fs');
// Exercise 1.1
var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log("Today is : " + daylist[day] + ".");
var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
console.log(
  "Current Time : " + hour + prepand + " : " + minute + " : " + second
);

// Exercise 1.2
function copyToClipboard() {
  var text = document.getElementById("input");
  text.select();
  text.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(text.value);
}

// Exercise 1.3 (em kham khảo trên mạng)
var parseCookie = (str) =>
  str
    .split(";")
    .map((v) => v.split("="))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim())] = decodeURIComponent(v[1].trim());
      return acc;
    }, {});

// Exercise 1.4
var isJSON = (obj) => {
  try {
    JSON.parse(obj);
    return true;
  } catch (e) {
    return false;
  }
};
console.log(isJSON('{"tuan":"tuan","phu":"phu"}'));

// Exercise 1.5
const JSONToFile = (obj, filename) =>
  fs.writeFile(`${filename}.json`, JSON.stringify(obj, null, 2));
JSONToFile({ test: 'is passed' }, 'exercise1_5');
