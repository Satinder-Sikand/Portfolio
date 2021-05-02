// Some Code from freecodecamp and Stack Overflow
(function (){
                            
    let imgObj = document.getElementById('image-slides');  
    let imageDir = "./Pictures/";                          
    let secondsDelay = 4;                            
    let images = ['slides1.jpg', 'slides2.jpg', 'slides3.jpg', 'slides4.jpeg'];

    let index = 0;
    let changeImage = function() {
        let len = images.length;
        
        if (index === len-1) {
            index = 0;
        } else
            index++;
        imgObj.src = imageDir + images[index];
        // console.log(imgObj.src);
        
    };
    setInterval(changeImage, secondsDelay * 1000);
    
})();

// toggle hamburger on mobile
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

// exit navbar after clicking a link
const navLinks = document.querySelectorAll('.nav_link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    });
});

