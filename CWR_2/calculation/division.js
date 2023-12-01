function division() {
    const num1 = Number(document.getElementById("val1").value);
    const num2 = Number(document.getElementById("val2").value);

    const result = num1 / num2;

    document.getElementById("result").innerHTML = "Division : " + result;

    document.getElementById("result").style.color = "skyblue";
}