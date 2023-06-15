const textareaEl=document.getElementById('textarea');
const totalCounterEl=document.getElementById("total-counter")
const remainigCounterEl=document.getElementById("Remaining-counter")
textareaEl.addEventListener("keyup",()=>{
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText=textareaEl.value.length
    remainigCounterEl.innerText=textareaEl.getAttribute("maxlength")-textareaEl.value.length;
}