function showLabel(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    const label2 = document.querySelector(`label[for="repeat-password"]`);
    const bgUrl = document.querySelector(".custome-visible-reg2")


    if (fieldId === "repeat-password") {

        label2.style.color = "#C81E69";
        bgUrl.style.backgroundImage = "url('../assets/icons/icons-final-colors-24x24/icon_visibility-on-pink.svg')";
    }

    label.style.transform = "translateY(-40px)";

}

function hideLabel(fieldId) {
    const input = document.getElementById(fieldId);
    const bgUrl = document.querySelector(".custome-visible-reg2")
    if (!input.value) {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        label.style.transform = "translateY(-12px)";
        label.style.color = "#707070";

        bgUrl.style.backgroundImage = "url('../assets/icons/icons-black-24x24/icon_visibility-on.svg')";
    }
}


const checkbox = document.getElementById('check-reg');
const registerButton = document.getElementById('reg-btn');

checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
        registerButton.classList.add('active-btn');
    } else {
        registerButton.classList.remove('active-btn');
    }
});