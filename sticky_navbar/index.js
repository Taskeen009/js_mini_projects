const navbarEl=document.querySelector(".navbar")

console.log(navbarEl);

const bottomConatinerEl=document.querySelector(".bottom-container");

console.log(bottomConatinerEl.offsetTop)

window.addEventListener("scroll",()=>{
  //  console.log(window.scrollY)
  if(window.scrollY> bottomConatinerEl.offsetTop-navbarEl.offsetHeight -50){
    navbarEl.classList.add("active")
  }
  else{
    navbarEl.classList.remove("active");
  }
})