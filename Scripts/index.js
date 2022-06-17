
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


const API="DebNRmfqSjTAyhg0cBDBDb3HuwkUm8tcASfIMkW9OUg"

import { navbar } from "../components/navbar.js";
let n=document.getElementById("navbar")
n.innerHTML=navbar();

import {searchImage,append} from"./fetch.js";



let search=(e)=>{
    if(e.key==="Enter"){
        let value=document.getElementById("query").value;
        searchImage(API,value).then((data) =>{
            console.log(data)
            let printdata =document.getElementById("printdata");
            append(data.results,printdata);
        });
    }
};


document.getElementById("query").addEventListener("keydown",search);







