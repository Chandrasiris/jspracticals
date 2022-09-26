
        "strict"
        const images = ['image2.jpg','image3.jpg','image4.jpg','image5.jpg'];
        const container = document.getElementById('content');
        const nextBtn = document.getElementById('next');
        var currentIndex = 0; 
        var imgSlide = document.createElement('img');      
        nextBtn.addEventListener('click',function(e){
            e.preventDefault();           
            if(currentIndex < images.length-1){ 
                currentIndex++;                
                setSlideImage();                
            }
           // else{currentIndex = 0;}
            if(container.children.length>images.length){
                container.removeChild(container.children[0]);
            }
        });  
        var prevBtn = document.getElementById('prev')     ;
        prevBtn.addEventListener('click', function(e){
            e.preventDefault();
            if(currentIndex > 0){
                currentIndex--;
            }
            setSlideImage();
        });
        function setSlideImage(){
            imgSlide.src='Res/images/'+images[currentIndex];
            imgSlide.className= 'fadeIn';
            container.appendChild(imgSlide);
            document.getElementById('slideNo').innerHTML= currentIndex +1 ;
        }
