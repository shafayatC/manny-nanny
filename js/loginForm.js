function showLabel(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    const label2 = document.querySelector(`label[for="password"]`);
    const bgUrl = document.querySelector(".custome-visible")


    if (fieldId === "password") {

        label2.style.color = "#C81E69";
        bgUrl.style.backgroundImage = "url('../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg')";

    }

    label.style.transform = "translateY(-40px)";



}


function hideLabel(fieldId) {
    const input = document.getElementById(fieldId);
    const bgUrl = document.querySelector(".custome-visible")
    if (!input.value) {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        label.style.transform = "translateY(-12px)";
        label.style.color = "#707070";
        const btn = document.getElementById("login-btn");
        btn.style.backgroundColor = "#EFC5D8"
        bgUrl.style.backgroundImage = "url('../assets/icons/icons-black-24x24/icon_visibility-on.svg')";
    }
}


function onPasswordChange() {
    const passwordInput = document.getElementById("password");
    const btn = document.getElementById("login-btn");

    if (passwordInput.value.length >= 4) {
        btn.style.backgroundColor = "#C81E69";
    } else {
        btn.style.backgroundColor = "#EFC5D8";
    }
}

const passwordInput = document.getElementById("password");
passwordInput.addEventListener("input", onPasswordChange);