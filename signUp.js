function setFormMessage (formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
};

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input-error");
    inputElement. parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
} 



document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form__hidden");
        createAccountForm .classList.remove("form__hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form__hidden");
        createAccountForm .classList.add("form__hidden"); 
    });

    const visibilityBtn =  document.querySelector(`.visibility__button`)
    visibilityBtn.addEventListener("click", () => {
        const password = document.querySelector(".password__visibility");
        const icon = document.getElementById("icon")
        if (password.type === "password") {
            password.type = "text";
            icon.innerText = "visibility_off"

        }
        else {
           password.type = "password";
           icon.innerText = "visibility"
        }
     
    });
 



    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        setFormMessage(loginForm, `error`, `Invalid username/password combination`)

    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if(e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement,"Username must be at least 10 characters in length")
            }
        });
        inputElement.addEventListener("input", e  => {
             clearInputError(inputElement);
        })
    })

});  