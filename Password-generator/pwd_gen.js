const pwd = document.getElementById("pwd_txt");
const generate = document.getElementById("generate");
const clipboard = document.getElementById("clipboard");
const pwd_length = document.getElementById("slider");
const copy_text = document.getElementById("copy_text");
let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

//generating pssword
generate.addEventListener("click", () => {
    let password = "";
    let checked = document.getElementById("checkbox").checked;
    let final_string = string;
    if(checked) {
        final_string += "!@#$%^&*/=+?";
    }
    for (let i = 0; i < pwd_length.value; i++) {
        let pwd = final_string[Math.floor(Math.random() * final_string.length)];
        password += pwd;
    }
    pwd.innerText = password;
    final_string = string;
});

//Copy function to copy text to clipboard
clipboard.addEventListener("click", () => {
    navigator.clipboard.writeText(pwd.innerText);
    copy_text.textContent = "Password Copied!";
    copy_text.style.display = "block";
    setTimeout(() => {
        copy_text.style.display = "none";
    }, 2000);
});