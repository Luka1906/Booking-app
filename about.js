const image = document.querySelectorAll(`img`);
const para = document.querySelectorAll(`p`);

window.addEventListener(`scroll`, displayImage);
window.addEventListener(`scroll`, displayParagraph);

let imagePosition;
let paragraphPosition; 

function displayImage () {
    for (let i = 0; i <image.length; i++) {
        imagePosition = image[i].getBoundingClientRect().top;
        if (imagePosition < 450) {
            image[i].classList.add(`imageVisible`)
            
        }
        
    }
}
function displayParagraph () {
    for (let i = 0; i < para.length; i++) {
        paragraphPosition = para[i].getBoundingClientRect().top;
        if (paragraphPosition < 550) {
            para[i].classList.add(`paragraphVisible`)
    }
        
    }
}
    
