

window.onload = function() {
  
  document.querySelector("#start .optiona").onclick = function() {      /* clicked on start */
    document.querySelector("#start").style.display = "none";            /* want to hide start once it's clicked */
    document.querySelector("#choiceone").classList.add("showSlide");    /* display this */
  }
 
  document.querySelector("#choiceone .optiona").onclick = function() {  /* clicked on choice one option a */
    document.querySelector("#choiceone").style.display = "none";        /* want to hide choice one slide */
    document.querySelector("#choicetwo").classList.add("showSlide");    /*display this */
  }
  
  document.querySelector("#choiceone .optionb").onclick = function() {  /* clicked on option b */
    document.querySelector("#choiceone").style.display = "none";        /* want to hide choice one slide */
    document.querySelector("#callinsick").classList.add("showSlide");   /* display this */
  }
  
  document.querySelector("#callinsick .optiona").onclick = function() { /* clicked on "next" button */
    document.querySelector("#callinsick").style.display = "none";       /* want to hide call in sick slide when "next" button is clicked */
    document.querySelector("#choicetwo").classList.add("showSlide");    /* want to display this */
  }
  
  document.querySelector("#choicetwo .optiona").onclick = function() {  /* clicked on option a for choice 2 */
    document.querySelector("#choicetwo").style.display = "none";        /* want to hide choice 2 slide when "option a" button is clicked */
    document.querySelector("#choicethree").classList.add("showSlide");  /* display choice 3 slide */
  }
  
  document.querySelector("#choicetwo .optionb").onclick = function() {  /* clicked on option a for choice 2 */
    document.querySelector("#choicetwo").style.display = "none";        /* want to hide choice 2 slide when "option b" button is clicked */
    document.querySelector("#choicethree").classList.add("showSlide");  /* display choice 3 slide */
  }
  
  document.querySelector("#choicethree .optiona").onclick = function() {  /* clicked on option a for choice 3 */
    document.querySelector("#choicethree").style.display = "none";        /* want to hide choice 3 slide when "option a" button is clicked */
    document.querySelector("#deadend").classList.add("showSlide");        /* display deadend slide */
  }
  
  document.querySelector("#choicethree .optionb").onclick = function() {  /* clicked on option b for choice 3 */ 
    document.querySelector("#choicethree").style.display = "none";        /* want to hide choice 3 slide when "option b" button is clicked */
    document.querySelector("#deadend").classList.add("showSlide");        /* display deadend slide */
  }
  
  document.querySelector("#deadend .optiona").onclick = function() {      /* clicked on option a for deadend slide */
    document.querySelector("#deadend").style.display = "none";            /* want to hide deadend slide when "option a" button is clicked */
    document.querySelector("#choicefour").classList.add("showSlide");     /* display choice four slide */
  }
 
  document.querySelector("#choicefour .optiona").onclick = function() {   /* clicked on option a for choice four slide */
    document.querySelector("#choicefour").style.display = "none";         /* want to hide choice four slide when "option a" button is clicked */
    document.querySelector("#choicefive").classList.add("showSlide");     /* display choice five slide */
  }
  
  document.querySelector("#choicefour .optionb").onclick = function() {   /* clicked on option b for choice four slide */
    document.querySelector("#choicefour").style.display = "none";         /* want to hide choice four slide when "option b" button is clicked */
    document.querySelector("#choicesix").classList.add("showSlide");      /* display choice six slide */
  }
  
  document.querySelector("#choicefive .optiona").onclick = function() {   /* clicked on option a for choice 5 slide */
    document.querySelector("#choicefive").style.display = "none";         /* want to hide choice five slide when "option a" button is clicked */
    document.querySelector("#final").classList.add("showSlide");          /* display choice final slide */
  }
  
   document.querySelector("#choicefive .optionb").onclick = function() {   /* clicked on option b for choice 5 slide */
    document.querySelector("#choicefive").style.display = "none";          /* want to hide choice five slide when "option b" button is clicked */
    document.querySelector("#final").classList.add("showSlide");           /* display choice final slide */
  }
  
   document.querySelector("#choicesix .optiona").onclick = function() {    /* clicked on option a for choice 6 slide */
     document.querySelector("#choicesix").style.display = "none";          /* want to hide choice six slide when "option a" button is clicked */
     document.querySelector("#final").classList.add("showSlide");          /* display choice final slide */
   }
   
    document.querySelector("#choicesix .optionb").onclick = function() {   /* clicked on option b for choice 6 slide */
     document.querySelector("#choicesix").style.display = "none";          /* want to hide choice six slide when "option b" button is clicked */
     document.querySelector("#final").classList.add("showSlide");          /* display choice final slide */
   }
    
    document.querySelector("#final .optiona").onclick = function() {       /* clicked on option a for choice 6 slide */
      window.location.reload();
   }
   
}
