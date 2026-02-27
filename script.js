function toggleMenu(){
document.getElementById("nav-links").classList.toggle("show");
}

const text=["Frontend Developer","Business Website Expert","Freelancer"];
let i=0,j=0,currentText="",isDeleting=false;

function type(){
currentText=text[i];
if(isDeleting){
document.getElementById("typing").textContent=currentText.substring(0,j--);
}else{
document.getElementById("typing").textContent=currentText.substring(0,j++);
}

if(!isDeleting && j===currentText.length){
isDeleting=true;
setTimeout(type,1000);
return;
}

if(isDeleting && j===0){
isDeleting=false;
i=(i+1)%text.length;
}
setTimeout(type,isDeleting?50:100);
}
type();

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-80){
el.classList.add("active");
}
});
});

const topBtn=document.getElementById("topBtn");

window.onscroll=function(){
if(window.scrollY>300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
}

function scrollToTop(){
window.scrollTo({top:0,behavior:"smooth"});
}
