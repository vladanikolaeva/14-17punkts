function verify() {
    let seatNumber = parseInt(document.getElementById("seatNumber").value);
    let result;

    if (seatNumber >= 1 && seatNumber <= 36) {
    
        if (seatNumber % 2 === 1) {
            result = "Нижнее купейное место";
        } else {
            result = "Верхнее купейное место";
        }
    } else if (seatNumber >= 37 && seatNumber <= 54) {
        
        if (seatNumber % 2 === 1) {
            result = "Нижнее боковое место";
        } else {
            result = "Верхнее боковое место";
        }
    } else {
        result = "Неверный номер места";
    }

    document.getElementById("result").value = result;
}

function send() {
    const resultValue = document.getElementById("result").value;
    if (resultValue !== "Неверный номер места") {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Неправильный номер места. Повторите ввод");
    }
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send);

  