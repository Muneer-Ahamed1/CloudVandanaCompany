const arr1=[9,8,7,"+",4,5,6,"-",1,2,3,"/",".",0,"=","*"];
const arr2=["+","-","-","/",".","*"]
let wrap2=document.querySelector(".wrap2");
arr1.forEach((val)=>{
    let btn=document.createElement("button");
    btn.textContent=val
    btn.value=val
    if(typeof val == "string") {
        btn.className="symbolBtn"
    }
    else{
        btn.className="numberBtn"
    }
    if(val=="*") {
        btn.textContent="X"
        btn.classList.add("specialBtn")
    }
    if(val=="=") {
        btn.classList.add("specialBtn")
    }
    if(val==".") {
        btn.classList.add("specialBtn")
    }
    if(val =="/"){
        btn.textContent="÷";
    }
    btn.classList.add("btn")

    wrap2.appendChild(btn)
})
const cal=document.getElementById("cal");
Array.from(document.getElementsByClassName("btn")).map((vl)=>{
    vl.addEventListener("click",(e)=>{
        if(cal.value.length==0 && e.target.classList.contains("numberBtn")){
            cal.value=e.target.value+"";
        }
        else if(e.target.value=="=") {
            cal.value=eval(cal.value);
        }
        else if(e.target.value=="AC"){
            cal.value="";
        }
        else{
            console.log(cal.value.charAt(cal.value.length-1))
            let stringNum=e.target.value+"";
            console.log(stringNum)
            if(!(arr2.includes(cal.value.charAt(cal.value.length-1)) && arr2.includes(e.target.value)))
            {
                cal.value=cal.value+""+e.target.value


            }
        }
        
    })
})




