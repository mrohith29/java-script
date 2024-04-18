// myName(function(){
//     document.write("My name is Mariyala Rohith")
// })

function myName() {
    document.write("My name is Mariyala Rohith")
}

function mousetered() {
    // document.getElementById('myDiv').innerText = "Mouse enterd the in the page";
    console.log("Mouse Entered")
    // location.reload(5000)
}

function mouseclicked() {
    // document.getElementById('myDiv').innerText = "Mouse clicked";
    console.log("Mouse clicked")
    // location.reload(1000)
}

setInterval(function() {
    location.reload();
}, 5000)