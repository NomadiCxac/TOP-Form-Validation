function validatePassword () {
    let password = document.getElementById("password");
    let confirmPassword = document.getElementById("confirmPassword");
    let errorMessage = document.getElementById("errorMessage");

    if ((password.value || confirmPassword.value) === "")  {
        // TODO: A prompt that says the field you entered is empty | outline the field in red
        errorMessage.innerText = ("*Password Fields are Blank")
        console.log("blank")
        return;
    }

    if (password.value === confirmPassword.value) {
        errorMessage.innerText = ("")
        console.log("passwords do match")
        return;
    } else {
        errorMessage.innerText = ("*Password Fields Do Not Match")
        console.log("passwords do not match")
        // TODO: A prompt that says the password and confirm password field do not match | outline the field in red
    }
}

// document.addEventListener("DOMContentLoaded", validatePassword());


d3.addEventListener('click', (e) => {
    if (e.target.id === "createButton") {
        validatePassword();
    }
})