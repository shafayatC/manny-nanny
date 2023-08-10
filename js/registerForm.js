function showLabel(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    const label2 = document.querySelector(`label[for="repeat-password"]`);
    const iconUrl = document.querySelector(".span-visible-2")
    const passwordInputVisible2 = document.getElementById('repeat-password');

    if (fieldId === "repeat-password") {
        label2.style.color = "#C81E69";
        console.log(passwordInputVisible2.type)
        if (passwordInputVisible2.type === "password") {
            iconUrl.src = '../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg';
        }
    }
    label.style.transform = "translateY(-38px)";

}

function hideLabel(fieldId) {
    const input = document.getElementById(fieldId);
    const iconUrl = document.querySelector(".span-visible-2")

    if (!input.value) {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        label.style.transform = "translateY(-12px)";
        label.style.color = "#707070";
        iconUrl.src = "./assets/icons/icons-black-24x24/icon_visibility-on.svg"
    }
}




// check box function--------------------------------
const checkbox = document.getElementById('check-reg');
const registerButton = document.getElementById('reg-btn');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        registerButton.classList.add('active-btn');
    } else {
        registerButton.classList.remove('active-btn');
    }
});

// password icon --------------------------------
const toggleVisibilityButton = document.getElementById('toggleVisibility');
const passwordInputVisible = document.getElementById('password');
const imageShow = document.querySelector(".span-visible")


toggleVisibilityButton.addEventListener('click', function () {
    if (passwordInputVisible.type === 'password') {
        imageShow.src = "./assets/icons/icons-black-24x24/icon_visibility-off.svg"
        passwordInputVisible.type = 'text';
    } else {
        passwordInputVisible.type = 'password';
        imageShow.src = "./assets/icons/icons-black-24x24/icon_visibility-on.svg";
    }
});


// repeat-password icon ----------------------------------
const toggleVisibilityButton2 = document.getElementById('toggleVisibility-2');
const passwordInputVisible2 = document.getElementById('repeat-password');
const imageShow2 = document.querySelector(".span-visible-2")

toggleVisibilityButton2.addEventListener('click', function () {
    if (passwordInputVisible2.type === 'password') {
        imageShow2.src = "./assets/icons/icons-final-colors-24x24/icon_visibility-off-pink.svg"
        passwordInputVisible2.type = 'text';
    } else {
        passwordInputVisible2.type = 'password';
        imageShow2.src = "../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg";
    }
});

