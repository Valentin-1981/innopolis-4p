const EMAIL_REGEXP =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const input = document.querySelector("#send");

const email = document.querySelector("#email");

const emailCheck = document.querySelector("#email-check");
const passwordCheck = document.querySelector("#password-check");

const password = document.querySelector("#password");
const password_submit = document.querySelector("#password_submit");

function onInput() {
    if (email.value === "") {
        emailCheck.innerHTML = "Пустой email";
        // return;
    }

    if (!isEmailValid(email.value)) {
        // email.style.borderColor = "red";
        emailCheck.innerHTML = "Email введён некорректно";
    }

    if (password.value === "") {
        passwordCheck.innerHTML = "Поле обязательно для заполнения";
        return;
    }

    if (password.value.length < 8) {
        passwordCheck.innerHTML = "Пароль менее 8 символов";
        return;
    }

    if (password.value !== password_submit.value) {
        passwordCheck.innerHTML = "Пароли не совпадают";
        return;
    }

    console.log(email.value, password.value);
}

input.addEventListener("click", onInput);

function isEmailValid(value) {
    return EMAIL_REGEXP.test(value);
}
