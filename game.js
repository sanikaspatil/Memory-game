function openNav(){
        
       
    document.getElementById("sidenav").style.display="block";
  document.getElementById("sidenav").style.transition = 0.8 +"s" ;
  document.getElementById("menu").src="close.png";
  
   
  if(document.getElementById("menu").src=="close.png")
  {
      closeNav();
  }
  
 
}

function closeNav(){


      document.getElementById("sidenav").style.display="none";
  document.getElementById("menu").src="menu.png";
    
}
