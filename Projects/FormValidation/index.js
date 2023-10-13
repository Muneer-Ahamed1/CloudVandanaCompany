let error = document.querySelectorAll(".error");

const formArr = [document.getElementById("Name"), document.getElementById("Email")]
const formArr2 = [[document.getElementById("inlineRadio1"), document.getElementById("inlineRadio2")],
[document.getElementById("inlineRadio3"), document.getElementById("inlineRadio4")],
[document.getElementById("inlineRadio5"), document.getElementById("inlineRadio6"), document.getElementById("inlineRadio7")]]


function validateName() {
    var nameInput = formArr[0]
    var name = nameInput.value.trim();
    if (name === "") {
        setError(nameInput, "Please enter valid name.");

    } else {
        clearError(nameInput);
    }

}
formArr2.forEach((value) => {
    value.map((vl) => {
        vl.addEventListener("click", (e) => {
            if (e.target.checked) {
                clearError(e.target.parentElement.parentElement)
            }

        })
    })
})

function validateEmail() {
    var emailInput = formArr[1]
    var email = emailInput.value.trim();
    if (email.length != 0) {
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (!emailPattern.test(email)) {
            setError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }
    }
    else {
        clearError(emailInput)
    }
}
function validateBtn2() {
    let isValid = true;
    formArr2.map((vl, index) => {
        if (index < 2) {

            if (vl[0].checked || vl[1].checked) {
                clearError(vl[0].parentElement.parentElement);

            }
            else {
                setError(vl[0].parentElement.parentElement, "*Required Field")
                isValid = false;

            }
        }
        else {
            if (formArr2[2][0].checked || formArr2[2][1].checked || formArr2[2][2].checked) {
                clearError(vl[0].parentElement.parentElement);
            }
            else {
                setError(vl[0].parentElement.parentElement, "*Required Field")
                isValid = false;


            }

        }

    })
    return isValid;

}


function validateBtn() {
    let isValid = true;

    for (let i = 0; i < formArr.length; i++) {
        let vl = formArr[i];
        console.log(vl)

        if (vl.value.length === 0) {
            setError(vl, "*Required Field");
            isValid = false;

        }
    }
    return isValid;

}
function setError(input, message) {
    var errorDiv = input.nextElementSibling;
    console.log(errorDiv)
    errorDiv.textContent = message;
    errorDiv.style.display = "block";
}

function clearError(input) {
    var errorDiv = input.nextElementSibling;
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}

document.querySelector("#btn1").addEventListener("click", (e) => {
    e.preventDefault();
    const Textarea1=document.getElementById("Textarea1");
    let bool1 = validateBtn()
    let bool2 = validateBtn2()
    console.log(bool1)
    console.log(bool2)
    if (bool1 && bool2) {
        console.log("muneer")
        document.querySelector("#btn1").setAttribute("data-bs-toggle", "modal");
        document.querySelector("#btn1").setAttribute("data-bs-target", "#exampleModal");
        document.querySelectorAll(".Modal").forEach((vl,index)=>{
            console.log(vl.lastElementChild);
            console.log(formArr[index].value)
            vl.lastElementChild.textContent=formArr[index].value;
        })
        document.querySelectorAll(".Modal-check").forEach((vl,index)=>[
         formArr2[index].forEach((val)=>{
            if(val.checked) {
                vl.lastElementChild.textContent=val.value
            }
         })   
        ])
        let modalBody=document.querySelector(".modal-body");

        if(Textarea1.value.length>0){
            
            console.log(modalBody)
            if(modalBody.lastElementChild.classList.contains("Modal-check")) {
            const textArea=document.createElement("div");
            textArea.className="textArea";
            let firstChild=document.createElement("p");
            firstChild.textContent="Do you have any suggestion to improve our service";
            let SecondChild=document.createElement("p");
            SecondChild.textContent=Textarea1.value;
            textArea.appendChild(firstChild);
            textArea.appendChild(SecondChild);
            console.log(textArea)
            modalBody.appendChild(textArea);
            }
        }
        else{
            if(modalBody.lastElementChild.classList.contains("textArea")) {
                modalBody.lastElementChild.remove();
            }
        }



        document.querySelector("#btn1").click();
    }

})

function Reset(e) {
    document.getElementsByTagName("form")[0].reset();
}















