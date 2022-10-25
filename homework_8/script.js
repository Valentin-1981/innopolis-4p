function function_1() {
    var result = "";
    var number__1 = document.getElementById("number_1").value;
    var number__2 = document.getElementById("number_2").value;
    if (number__1 === "") {
        document.getElementById("result").innerText = "Первое число не указано";
        return;
    }
    if (number__2 === "") {
        document.getElementById("result").innerText = "Второе число не указано";
        return;
    }
    var number_1 = Number(number__1);
    var number_2 = Number(number__2);
    // console.log(number_1);

    if (isNaN(number_1) || isNaN(number_2)) {
        document.getElementById("result").innerText = "Некорректный ввод чисел";
        return;
    }

    var symbol = document.getElementById("symbol").value;
    switch (symbol) {
        case "*":
            result = number_1 * number_2;
            break;
        case "/":
            result = number_1 / number_2;
            break;
        case "-":
            result = number_1 - number_2;
            break;
        case "+":
            result = number_1 + number_2;
            break;
        case "":
            result = "Не введён знак";
            document.getElementById("result").innerText = result;
            return;
            break;
        default:
            result = "Программа не поддерживает такую операцию";
            document.getElementById("result").innerText = result;
            return;
            break;
    }

    if (isNaN(result) || result === Infinity) result = "Операция некорректна";

    document.getElementById("result").innerText = result;
    // console.log(number_1);
}
