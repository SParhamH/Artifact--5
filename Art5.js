var myImages =["https://i.pinimg.com/originals/1e/3b/7b/1e3b7bec5cca2a9bb2c6647a40620cdf.gif", "https://live.staticflickr.com/7167/6415875431_ce24df5d86_b.jpg","http://www.liveanimalslist.com/mammals/images/dolphin-in-water.jpg","http://i1151.photobucket.com/albums/o632/bowietvc15/Bowietvc15-2/DolphinsWallpaper2.jpg","http://i1151.photobucket.com/albums/o632/bowietvc15/funny%20gifs/animal-art-cute-dolphin-nature-Favimcom-311780.jpg"];


var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

 var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false);

function autoSlide(){
    if (document.getElementById("auto").checked)
     next(); 
    }
    
    
    setInterval(autoSlide,2000); // Next