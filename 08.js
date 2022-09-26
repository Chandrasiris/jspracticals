
"strict"
var images = ['image2.jpg','image3.jpg','image4.jpg','image5.jpg'];       
var nextBtn = document.getElementById('next');
var currentIndex = 0;       
nextBtn.addEventListener('click',function(e){   //using event listner
    e.preventDefault();
    currentIndex++;
    if(currentIndex < images.length){
        let img = document.getElementById('img');
        img.setAttribute('src','Res/images/'+images[currentIndex]);
    }
    else{currentIndex = 0;}
});       
