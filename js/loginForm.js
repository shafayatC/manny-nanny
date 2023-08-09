function showLabel(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    const label2 = document.querySelector(`label[for="password"]`);
    const bgUrl = document.querySelector(".span-visible")
    const passwordInputVisible = document.getElementById('password');

    if (fieldId === "password") {

        label2.style.color = "#C81E69";
        if (passwordInputVisible.type === "password") {
            bgUrl.src = "../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg";
        }
        label.style.transform = "translateY(-40px)";
    }
}

function hideLabel(fieldId) {
    const input = document.getElementById(fieldId);
    const bgUrl = document.querySelector(".span-visible")
    if (!input.value) {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        label.style.transform = "translateY(-12px)";
        label.style.color = "#707070";
        const btn = document.getElementById("login-btn");
        btn.style.backgroundColor = "#EFC5D8"
        bgUrl.src = "../assets/icons/icons-black-24x24/icon_visibility-on.svg";
        // bgUrl.style.image = "url('../assets/icons/icons-black-24x24/icon_visibility-on.svg')";
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



const toggleVisibilityButton = document.getElementById('toggleVisibility');
const passwordInputVisible = document.getElementById('password');
const imageShow = document.querySelector(".span-visible")

toggleVisibilityButton.addEventListener('click', function () {
    if (passwordInputVisible.type === 'password') {
        imageShow.src = "./assets/icons/icons-final-colors-24x24/icon_visibility-off-pink.svg"
        passwordInputVisible.type = 'text';
    } else {
        passwordInputVisible.type = 'password';
        imageShow.src = "../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg";
    }
});




