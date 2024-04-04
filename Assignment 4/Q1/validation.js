function EmptyValidate(TextBoxId, ErrorDivId) {
    var refToTextBox = document.getElementById(TextBoxId);

    var refToErrorMessageDiv = document.getElementById(ErrorDivId);

    var flag = false;

    if (refToTextBox.value != "") {
        console.log(refToTextBox.value);
        refToErrorMessageDiv.innerText = "";
        flag = true;
    }
    else {
        refToErrorMessageDiv.innerText = "Text Box Can't be Empty";
        flag = false;
    }
    return flag;
}
function NumberValidate(TextBoxId, ErrorDivId) {
    var refToTextBox = document.getElementById(TextBoxId);

    var refToErrorMessageDiv = document.getElementById(ErrorDivId);


    var flag = false;

    if (isNaN(refToTextBox.value) == true) {
        refToErrorMessageDiv.innerText = "Enter A valid Number";
        flag = false;
    }
    else {
        refToErrorMessageDiv.innerText = "";
        console.log(refToTextBox.value);
        flag = true;
    }

    return flag;


}
