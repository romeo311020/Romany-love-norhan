function scrollToSection(id){
  document.getElementById(id)?.scrollIntoView({behavior:"smooth"});
}
function showFinalMessage(){
  const box=document.getElementById("finalMessage");
  box.classList.toggle("show");
  if(box.classList.contains("show")){
    box.scrollIntoView({behavior:"smooth",block:"center"});
  }
}
