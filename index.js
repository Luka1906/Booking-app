// Photo carousel

let img = new Array(5);
for (let i = 0; i < img.length; i++) {
    img[i] = `images/${i+1}.jpeg`
    
}

window.addEventListener(`load`, doIt);

function doIt () {
   
        forward();
        auto();
}

let position = -1;

function forward () {
    position ++;
    if (position == img.length) {
        position = 0;
    }
    document.getElementById(`slider`).style.backgroundImage = `url("${img[position]}")`;
}
function auto () {
    a = setInterval(forward,2000);

};
// TESTIMONIALS
let btn = document.getElementsByClassName("btn");
let slide = document.getElementById("slide");
btn[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
}
this.classList.add("active");
}
btn[1].onclick = function() {
    slide.style.transform = "translateX(-800px)";
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
}
this.classList.add("active");
}
btn[2].onclick = function() {
    slide.style.transform = "translateX(-1600px)";
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
}
this.classList.add("active");
}
btn[3].onclick = function() {
    slide.style.transform = "translateX(-2400px)";
    for (let i = 0; i < 4; i++) {
        btn[i].classList.remove("active");
        
}
this.classList.add("active");
}


// Remote destinations
// window.onload = function () {
//     createImage(8);
// }
   
// function createImage(x) {
//    let div =  document.getElementById("pics");
//    for ( let i = 0; i<x; i++) {
//    let image = document.createElement("img");
//    image.src=`remote/${i+1}.jpeg`;
//    div.append(image);
   
// }
//    }
// function typeText () {
//   let createText = document.write = ``
// }
// let remoteImg  = {
//     pic1: {
    
//     name: "Maldivi",
//     image: "remote/1.jpeg"
// },
// pic2: {
//     name: "Bali",
//     image: "remote/2.jpeg"
// },
// pic3: {
//     name: "Thailand",
//     image: "remote/3.jpeg"
// },
// pic4: {
//     name: "Mongolia",
//     image: "remote/4.jpeg"
// },
// pic5: {
//     name: "Peru",
//     image: "remote/5.jpeg"
// },
//  pic6: {
//     name: "Kenya",
//     image: "remote/6.jpeg"
// },
//  pic7: {
//     name: "China",
//     image: "remote/7.jpeg"
//  },
//  pic8: {
//     name: "UAE",
//     image: "remote/8.jpeg"
// }
// };



// window.onload = function () {
//     createContent()
// };

// function createContent () {
//     let div =  document.getElementById("pics");
//     for ( element of Object.keys (remoteImg)) {
//     let img = document.createElement("img");
//     img.src=`${remoteImg[element].image}`;
//  div.append(img);
//  let text = document.createElement("h3").innerHTML= `${remoteImg[element].name}`;
//     div.append(text);

//       console.log(remoteImg[element]) ;
    
//     }





    
   
