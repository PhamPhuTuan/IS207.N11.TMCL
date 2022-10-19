// Exercise 2.2
// var body = document.getElementById("body1");
// body.style.backgroundColor = 'black';

// var myText = document.getElementsByClassName("myText")

// for (let i = 0; i < myText.length; i++) {
//     myText[i].style.color = 'white'
// }

darkLightMode = () => {
    var body = document.getElementById("body1");
    console.log(body)
    // body.classList.toggle("body2");
    body.classList.toggle("body2")

    var myText = document.getElementsByClassName("myText");
    for (let i = 0; i < myText.length; i++) {
        myText[i].classList.toggle("color");
    }
}