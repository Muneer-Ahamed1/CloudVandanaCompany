let error = document.querySelectorAll(".error");
const formArr=Array.from(document.getElementsByTagName("input")).slice(0,6)

let country=document.getElementById("country");
const formArr2 =[document.getElementById("inlineRadio5"), document.getElementById("inlineRadio6"), document.getElementById("inlineRadio7")]
console.log(formArr)


// // Create a new Date object to represent the current date
var currentDate = new Date();

// Get the current year, month, and day
var currentYear = currentDate.getFullYear();
var currentMonth = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
var currentDay = currentDate.getDate().toString().padStart(2, '0');

// // Format the date as "YYYY-MM-DD" for the min attribute
var formattedDate = `${currentYear}-${currentMonth}-${currentDay}`;
document.getElementById("date").setAttribute("max", formattedDate);
document.querySelector("#date").addEventListener('click', (e) => {
    e.target.showPicker()
});


function validateName(e) {
    console.log(e)
    var nameInput = e
    var name = nameInput.value.trim();
    if (name === "") {
        console.log(nameInput.parentElement)
        setError(nameInput, `Please enter valid ${nameInput.parentElement.firstElementChild.textContent.toLowerCase()}.`);

    } else {
        clearError(nameInput);
    }

}

country.addEventListener("change",(e)=>{
    console.log(e.target)
    if(e.target.value.length!=0){
        clearError(e.target);
    }

})


formArr2.forEach((vl) => {
        vl.addEventListener("click", (e) => {
            if (e.target.checked) {
                console.log(e.target)
                clearError(e.target.parentElement.parentElement)
            }
    })
})

function validateEmail(e) {
    var emailInput = e
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


function validatePhone(e) {
    var phoneInput = e
    var phone = phoneInput.value.trim();
    if (phone.length != 0) {
        var phonePattern = /^[0-9]{10}$/;

        if (!phonePattern.test(phone)) {
            setError(phoneInput, "Please enter a valid 10-digit phone number.");
        } else {
            clearError(phoneInput);
        }
    }
    else {
        clearError(phoneInput)
    }
}
function validateBtn2() {
    let isValid = false;
    formArr2.map((vl, index) => {
        
        
            if (vl.checked) {
                clearError(vl.parentElement.parentElement);
                isValid = true;

            }
    })
    if(!(isValid)) {
        setError(formArr2[0].parentElement.parentElement, "*Required Field")


    }
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
    if(country.value.length===0) {
        setError(country, "*Required Field");
            isValid = false;

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
    console.log(errorDiv)
    errorDiv.textContent = "";
    errorDiv.style.display = "none";
}
function setDate(e) {
    console.log(e)
    if(e.value.length>0) {
        clearError(e);
    }
}

document.querySelector("#btn1").addEventListener("click", (e) => {
    console.log(e.target)
    e.preventDefault();
    const Textarea1 = document.getElementById("Textarea1");
    let bool1=validateBtn();
    let bool2 = validateBtn2();
    console.log(bool2)
    console.log(bool1)
    if ( bool1 && bool2) {
        let firstName=formArr[0].value;
        let lastName=formArr[1].value;
        let arr=[firstName+" "+lastName];

        let temp=formArr.map((vl,index)=>{
            if(index>1) {
             arr.push(vl.value);
            }
        })

        document.querySelector("#btn1").setAttribute("data-bs-toggle", "modal");
        document.querySelector("#btn1").setAttribute("data-bs-target", "#exampleModal");
        //For Modals this code...
        document.querySelectorAll(".Modal").forEach((vl, index) => {
            vl.lastElementChild.textContent = arr[index].toUpperCase();
        })

        //For Modals-check this code...
        formArr2.forEach((vl)=>{
            if(vl.checked) {
                document.querySelector(".Modal-check").lastElementChild.textContent=vl.value.toUpperCase();


            }
        })
        document.querySelector(".Modal-Select").lastElementChild.textContent=country.value.toUpperCase();
        
        
        
         let modalBody = document.querySelector(".modal-body");

        if (Textarea1.value.length > 0) {

            console.log(modalBody)
             if (modalBody.lastElementChild.classList.contains("Modal")) {
                 const textArea = document.createElement("div");
                textArea.className = "textArea";
               let firstChild = document.createElement("p");
                 firstChild.textContent = "Do you have any suggestion to improve our service";
                let SecondChild = document.createElement("p");
                 SecondChild.textContent = Textarea1.value;
                textArea.appendChild(firstChild);
                 textArea.appendChild(SecondChild);
                console.log(textArea)
                 modalBody.appendChild(textArea);
            }
         }
         else {
             if (modalBody.lastElementChild.classList.contains("textArea")) {
                 modalBody.lastElementChild.remove();
             }
        }



    }
    else{
        document.querySelector("#btn1").removeAttribute("data-bs-toggle");
        // data-bs-target
        document.querySelector("#btn1").removeAttribute("data-bs-target");
        document.querySelector("#btn1").click();



    }

    document.querySelector("#btn1").click();


})

function Reset(e) {
    document.getElementsByTagName("form")[0].reset();
    e.stopPropagation();

    
    document.querySelector("#btn1").removeAttribute("data-bs-toggle");
        // data-bs-target
        document.querySelector("#btn1").removeAttribute("data-bs-target");
        document.querySelector("#btn1").click();
}















