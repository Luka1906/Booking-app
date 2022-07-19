let nav = `<ul> 
                  <li> 
                     <a href="./">Home</a>
                  </li>
                  <li>
                     <a href ="about.html">About</a>
                  </li>
                  <li>
                     <a href ="signUp.html">Sign up</a>
                  </li>
              </ul>`;


 document.querySelector(`nav`).innerHTML = nav;
 
 window.addEventListener("scroll",navbar);

 function navbar () {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
 }
 