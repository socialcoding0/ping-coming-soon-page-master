const input = document.querySelector("#text-input");
const button = document.querySelector("#submit");
const errorMessage = document.querySelector("#error-message");

button.addEventListener("click", function () {
    console.log(input.value);
    ValidateEmail(input.value);
    input.value = "";
});

function ValidateEmail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
        return true;
    }
    else {
        input.classList.add("error");
        errorMessage.classList.add("active");

        setTimeout(() => {
            input.classList.remove("error");
            errorMessage.classList.remove("active");
        }, 1000);

        return true;
    }


}



