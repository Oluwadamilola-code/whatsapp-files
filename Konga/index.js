let button= document.querySelector("button")
slider = document.querySelector("div>div")

console.log(slider);

button.addEventListener("click",()=>{
    console.log(slider.className.trim());
    0
    if(slider.className.trim()==""){
        slider.className="transform"
        button.textContent="open"
    } 
    else {
        slider.className=""
        button.textContent = "close"
    }
})
