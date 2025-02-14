function clearInputTypeText() {
    inputs = document.getElementsByTagName('input');
    textarea = document.getElementsByTagName('textarea');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].type === 'text') {
            inputs[index].value = '';
        }
    }

    for (index = 0; index < textarea.length; ++index) {
        textarea[index].value = '';
    }
}

function selectfirstindex() {
    selectTags = document.getElementsByClassName('form-select');
    for (var i = 0; i < selectTags.length; i++) {
        if (selectTags[i].id != 'ddllocations') {
            selectTags[i].selectedIndex = 0;
        }
    }
}

function disableInputs() {
    inputs = document.getElementsByTagName('input');
    textarea = document.getElementsByTagName('textarea');
    for (index = 0; index < inputs.length; ++index) {
        if (inputs[index].type === 'text') {
            inputs[index].disabled = true;
        }
    }

    for (index = 0; index < textarea.length; ++index) {
        textarea[index].disabled = true;
    }

    selectTags = document.getElementsByClassName('form-select');
    for (var i = 0; i < selectTags.length; i++) {
        if (selectTags[i].id != 'ddllocations') {
            selectTags[i].disabled = true;
        }
    }
}


