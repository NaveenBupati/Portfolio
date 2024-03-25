 

 const toggleButton = document.querySelector(".navbar-toogle");
 const navvBarLinks = document.querySelectorAll(".nav-links")


 toggleButton.addEventListener( "click" ,() =>{

    for ( let i=0; i<navvBarLinks.length; i++){
        navvBarLinks[i].classList.toggle("active")
    }

 })