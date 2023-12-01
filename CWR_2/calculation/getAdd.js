function getAdd() {
    const num1 = Number(document.getElementById("val1").value)
    const num2 = Number(document.getElementById("val2").value)
    const add = num1 + num2;
    console.log(add);

    document.getElementById("result").innerHTML = "Addition : " + add;

    document.getElementById("result").style.color = "green";

}