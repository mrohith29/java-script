function multiply() {
    const num1 = Number(document.getElementById("val1").value);
    const num2 = Number(document.getElementById("val2").value);

    const final = num1 * num2;

    document.getElementById("result").innerHTML = "Multiplication : " + final;

    document.getElementById("result").style.color = "blue";

}