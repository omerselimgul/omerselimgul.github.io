const darkColorButton=document.getElementById("ligth-color")
const toggleInput=document.getElementById("switch")
const responsiveNavBar=document.getElementById("responsiveNavBar")
const responsiveNavbarContent=document.getElementById("responsive-navbar-content-child")
const linkedin=document.getElementById("linkedin");
const github=document.getElementById("github");

responsiveNavBar.addEventListener("click",(e)=>{
    if(responsiveNavbarContent.classList.contains("display-none")){
        responsiveNavbarContent.classList.remove("display-none");
    }else{
        responsiveNavbarContent.classList.add("display-none");
    }
    
})

toggleInput?.addEventListener("click",(e)=>{
    if(e.target.checked===true){
        document.documentElement.style.setProperty('--color1', '#99A98F');
        document.documentElement.style.setProperty('--color2', '#C1D0B5');
        document.documentElement.style.setProperty('--font-color', 'black');
        document.documentElement.style.setProperty('--exp-card-bg-color', '#D6E8DB');
        document.documentElement.style.setProperty('--navbar-bg-color', '#99A98F');
        document.documentElement.style.setProperty('--bg-color', '#B1D0B5');
        linkedin.src="./public/dark-linkedin.png"
        github.src="./public/dark-github.png"
    }else{
        document.documentElement.style.setProperty('--color1', '#23252f');
        document.documentElement.style.setProperty('--color2', '#272935');
        document.documentElement.style.setProperty('--font-color', 'white');
        document.documentElement.style.setProperty('--exp-card-bg-color', '#343a40');
        document.documentElement.style.setProperty('--navbar-bg-color', '#282a36');
        document.documentElement.style.setProperty('--bg-color', '#3a3b46');
        linkedin.src="./public/linkedin.png"
        github.src="./public/github.png"

    }
})


