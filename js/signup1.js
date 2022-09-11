const form = document.querySelector(".signup form"),
    continueBtn = form.querySelector(".button input"),
    errorText = document.querySelector(".error-txt");

form.onsubmit = (e) => {
    e.preventDefault(); //biar ga langsung exe
}

continueBtn.onclick = () => {
    //start ajax
    let xhr = new XMLHttpRequest(); //req xml obj
    xhr.open("POST", "php/signup.php", true);
    xhr.onload = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                let data = xhr.response;
                if (data == "success") {
                    location.href = "users.php";
                } else {
                    errorText.textContent = data;
                    errorText.style.display = "block";
                }
            }
        }
    }
    // send data from ajax to php
    let formData = new FormData(form); //form data obj
    xhr.send(formData); //send to php
}