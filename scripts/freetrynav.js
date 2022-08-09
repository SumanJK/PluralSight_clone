import footer from "../components/footer.js";
import { navigation, popuppart } from "../components/nav1.js"
import searchpart from "../components/searchpart.js"

let navItems = document.getElementById('navItems');
navItems.innerHTML = popuppart()
let nav = document.getElementById('nav');
nav.innerHTML = navigation();
let searchBar = document.getElementById('searchBar');
searchBar.innerHTML = searchpart();


let footerdiv = document.getElementById('footer');
footerdiv.innerHTML = footer();
console.log(footer);

let username = localStorage.getItem("username");
console.log(username);

if(username !== null){
  document.getElementById("signinbtn").innerHTML= username;
  console.log("user",username);
  let parent= document.getElementById("dissolveOnSignOut")
  parent.innerHTML ="SIGN OUT";
  let img = document.createElement("img");
  img.setAttribute("id", "signoutIcon")
  img.src= "./IMAGES/ok.gif";
  parent.setAttribute("class", "dissolve")
  parent.append(img);
  parent.addEventListener("click",function(){
      localStorage.removeItem("username");
      document.getElementById("signinbtn").innerHTML= "Sign in";
      window.location.reload();
      
  });

}
    