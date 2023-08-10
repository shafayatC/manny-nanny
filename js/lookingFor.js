function handleRadioChange(radio) {
    const parentDiv = radio.closest('.radio-input-field');
    const allDivs = document.querySelectorAll('.radio-input-field');

    allDivs.forEach(div => {
        div.classList.remove('checked');
    });

    parentDiv.classList.add('checked');
}


