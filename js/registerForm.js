function showLabel(fieldId) {
    const label = document.querySelector(`label[for="${fieldId}"]`);
    const label2 = document.querySelector(`label[for="repeat-password"]`);


    if (fieldId === "repeat-password") {

        label2.style.color = "#C81E69";
    }

    label.style.transform = "translateY(-40px)";

}

function hideLabel(fieldId) {
    const input = document.getElementById(fieldId);
    if (!input.value) {
        const label = document.querySelector(`label[for="${fieldId}"]`);
        label.style.transform = "translateY(-12px)";
        label.style.color = "#707070";
        const btn = document.getElementById("login-btn");
        btn.style.backgroundColor = "#EFC5D8"
    }
}


function onClick() {
    const passwordInput = document.getElementById("check-reg");
    const btn = document.getElementById("reg-btn");

    if (passwordInput.value === checked) {
        btn.style.backgroundColor = "#C81E69";
    } else {
        btn.style.backgroundColor = "#EFC5D8";
    }
}

const passwordInput = document.getElementById("check-reg");
passwordInput.addEventListener("input", onclick);