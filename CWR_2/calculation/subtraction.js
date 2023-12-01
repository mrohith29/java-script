function subtract() {
    const num1 = Number(document.getElementById("val1").value);
    const num2 = Number(document.getElementById("val2").value);
    const final = num1 - num2;
    console.log(final);

    document.getElementById("result").innerHTML = "Subtraction : " + final;

    document.getElementById("result").style.color = "red";
}