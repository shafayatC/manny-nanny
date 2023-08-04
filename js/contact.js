// dropdown menulist 1 -------------------
function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

function selectOption(option) {
    var dropdownButton = document.querySelector(".dropdown-button");
    dropdownButton.innerHTML = option;
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.style.display = "none";
}


// dropdown menulist 2 ------------------------


function toggleDropdown2() {
    var dropdownContent2 = document.getElementById("dropdownContent2");
    if (dropdownContent2.style.display === "block") {
        dropdownContent2.style.display = "none";
    } else {
        dropdownContent2.style.display = "block";

    }
}

function selectOption2(option2) {
    var dropdownButton2 = document.querySelector(".dropdown-button2");
    dropdownButton2.innerHTML = option2;
    var dropdownContent2 = document.getElementById("dropdownContent2");
    dropdownContent2.style.display = "none";


}





