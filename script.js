var header = document.querySelector("header");
var nav = document.querySelector(".background-img");
let respButton = document.querySelector(".responsive-button")
const sectionOneOptions = {
    rootMargin : "-650px 0px 0px 0px"
}
const sectionOneObserver = new IntersectionObserver(function(entries,sectionOneObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            header.classList.remove("nav-scrolled");
        }else{
            header.classList.add("nav-scrolled")
        }
    });
},sectionOneOptions);
sectionOneObserver.observe(nav);

respButton.addEventListener('click',function(){
    header.classList.toggle('resp-active-header');
})


AOS.init();