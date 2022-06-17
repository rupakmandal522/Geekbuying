// import { navbar } from "../components/navbar.js";
// let n=document.getElementById("navbar")
// n.innerHTML=navbar();

// document.querySelector("#tonavimg").addEventListener("click", homepageFun);

function home(){
    window.location.href = "index.html";
}

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





$('.feat-btn').click(function(){
    $('nav ul .feat-show').toggleClass("show11");
     $('nav ul .first').toggleClass("rotate");
  });
  $('.serv-btn').click(function(){
    $('nav ul .serv-show').toggleClass("show1");
  //   $('nav ul .second').toggleClass("rotate");
  });
  $('.new-btn').click(function(){
      $('nav ul .new-show').toggleClass("show2");
    //   $('nav ul .second').toggleClass("rotate");
    });

    $('.cn-btn').click(function(){
      $('nav ul .cn-show').toggleClass("show3");
    //   $('nav ul .second').toggleClass("rotate");
    });



    var cartData = [
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: [
                "https://bit.ly/3sanVR4",
                "https://img.gkbcdn.com/p/2022-04-16/08705a53807842f1ab570eed83b0e083-499712-0._w500_p1_.jpg",
                "https://bit.ly/3OVA5qZ",
                "https://bit.ly/3w5hfF8",
                "https://bit.ly/3w2CXtB",
                "https://bit.ly/3sxYo4T",
      
            ],
            name: "Tournus 4-6-Person Extendable Solid Rubberwood Dining Table",
            price  : "1,381.49",
            strikedoffprice:"₹5000",
            
        },
       
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: [
                
           "https://bit.ly/3OW4zsU",
        "https://bit.ly/3MO74vp",
        "https://bit.ly/3kC1iAS",
        "https://bit.ly/38OpnBQ",
        "https://bit.ly/3LHlSvN",
        "https://bit.ly/3KHHlU5",
            
          
          ],
            name: "The Gray Barn Hillcrest 3-Piece Storage Nook",
            price  : "₹900.19",
            strikedoffprice:"₹5000.00",
        },
        {
          newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
          image_url: ["https://bit.ly/3OW4zsU",
          "https://bit.ly/3MO74vp",
        "https://bit.ly/3kC1iAS",
        "https://bit.ly/38OpnBQ",
        "https://bit.ly/3LHlSvN",
        "https://bit.ly/3KHHlU5",
      ],
          name:  "The Gray Barn Hillcrest 3-Piece Storage Nook",
          price  : "₹1800.75",
          strikedoffprice:"₹2500.85 ",
      },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vID0LS"],
            name: "Simple Living Maura Buffet - Charcoal Gray",
            price  : "₹8000.75",
            strikedoffprice:"₹10,000.65",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3w4weiD"],
            name: "Deco Chef 5.5 QT Kitchen Stand Mixer,",
            price  : "₹5862.36",
            strikedoffprice:"₹9651.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3w2pxh8"],
            name: "Furniture of America Timm Farmhouse White",
            price  : "₹6985.58",
            strikedoffprice:"₹8569.63",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vHaHgR"],
            name: "HOMCOM Stand Mixer with 6+1P Speed,",
            price  : "₹9632.78",
            strikedoffprice:"₹12000.36",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-14/kospet-tank-m1-smartwatch-black-aa9d87-1649902105873._w280_p1_.jpg"],
            name: "Creality Ender-3 S1/S1 Pro 24V 1.6W CV-Laser Module",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vHUbNP"],
            name: "Beverage Refrigerator Cooler-145 Can Mini",
            price  : "₹426.0",
            strikedoffprice:"₹869.35",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-19/tronsmart-onyx-ace-pro-true-wireless-earbuds--white-878595-1650365396687._w280_p1_.jpg"],
            name: "Trianglelab Dragon Hotend V2.0 Super Precision 3D Printer Extrusion Head for V6",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-16/Trianglelab-Dragon-Hotend-V2-0-Super-Precision-499655-0._w280_p1_.jpg"],
            name: "Tronsmart Onyx Ace Pro True Wireless Earbuds TWS Earphone HD Call - White",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-28/XIAOMI-YOUPIN-JASE-PC-902-Dog-Hair-Clipper-Trimmer-500050-0._w280_p1_.jpg"],
            name: "Xiaomi Mijia Smart Mosquito Dispeller 2 USB/Battery Powered APP Remote Control",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-18/KUMI-X2-Pro-TWS-Bluetooth-5-1-Gaming-Earphone-Yellow-499740-0._w280_p1_.jpg"],
            name: "DOGNESS Cat Automatic LED Flash Rolling Ball Glowing Ball with Automatic",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Xiaomi-Mijia-MJJMQ01-ZJ-Portable-Massage-Gun-499759-0._w280_p1_.jpg"],
            name: "KUMI X2 Pro TWS Bluetooth 5.1 Gaming Earphone with One Touch Key True",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-18/KUMI-GW16T-Pro-Smartwatch-1-3---Screen-Multiple-Sports-Modes-Black-499737-0._w280_p1_.jpg"],
            name: "Smart Bluetooth Sunglasses TWS Audio Eyewear Music & Hands Free Calling",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-16/Trianglelab-Rapido-Hotend-PT1000-499658-0._w280_p1_.jpg"],
            name: "Zeblaze Stratos 2 Smartwatch 1.3'' AMOLED Display 24 Health Monitor",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-20/1-8L-Pet-Water-Dispenser-Filter-499792-0._w280_p1_.jpg"],
            name: "A pair of LED Luminous Chopsticks Creative Tableware Glow Sticks for Party,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/Baseus-PIR-Motion-Sensor-Night-Light-499757-0._w280_p1_.jpg"],
            name: "Trianglelab NEW LDO Orbiter Extruder V2.0 LDO MOTOR Compatible PLA PEI",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vID0LS"],
            name: "Creality Heating Block Kit-High Temperature Pro for Ender-3 S1/ Ender-3",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/37YHhSH"],
            name: "Tronsmart Force SE 50W Bluetooth 5.0 Speaker, IPX7 Waterproof, NFC,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-28/Zeblaze-Stratos-2-Smartwatch-1-3---AMOLED-Display-Blue-500033-0._w280_p1_.jpg"],
            name: "1.8L Pet Water Dispenser Filter Automatic Circulation with 2 Water Flow Modes and 6",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-25/A-pair-of-LED-Luminous-Chopsticks-499968-0._w280_p1_.jpg"],
            name: "XIAOMI YOUPIN JASE PC-902 Dog Hair Clipper Trimmer USB Charging Grooming",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url:[ "https://img.gkbcdn.com/p/2022-04-22/Trianglelab-Orbiter-Extruder-V2-0-LDO-Motor-499929-0._w280_p1_.jpg"],
            name: "Tronsmart Force SE 50W Bluetooth 5.0 Speaker, IPX7 Waterproof, NFC,",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-20/KUMI-GW3-Smartwatch-1-32---HD-Color-Screen-with-Bluetooth-Call-Silver-499791-0._w280_p1_.jpg"],
            name: "Creality Heating Block Kit-High 300 Temperature for Ender-3 S1/ Ender-3 S1",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://img.gkbcdn.com/p/2022-04-29/Smart-Bluetooth-Sunglasses-TWS-Audio-Eyewear-Sunglasses-Gold-500084-0._w280_p1_.jpg"],
            name: "KUMI GW3 Smartwatch for Men 1.32'' HD Color Screen with Bluetooth Call Heart",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vHUbNP"],
            name: "Xiaomi Mijia MJJMQ01-ZJ Portable Massage Gun Muscle Relax Electric",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3LIKx2V"],
            name: "KUMI GW16T Pro Smartwatch 1.3'' Touch Screen Multiple Sports Modes Heart Health",
            price  : "₹6289.05",
            strikedoffprice:"₹7861.51",
        },
        
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vG9OFj"],
            name: "ALLDOCUBE iWork GT 2 in 1 Tablet Windows 11 i5-1135G7 CPU, 8GB",
            price  : "₹69187.45",
            strikedoffprice:"",
        },
        {
            newimg: "https://img.gkbcdn.com/s3/l/label/Label1.png?version=20220427",
            image_url: ["https://bit.ly/3vHaHgR"],
            name: "HOMCOM Stand Mixer with 6+1P Speed, 600W Tilt Head",
            price  : "₹4568.36",
            strikedoffprice:"₹896.85",
        },
      
        
      ]
      


var wishData = JSON.parse(localStorage.getItem("wish"))|| [];


cartData.map(function(el){

  var div = document.createElement("div");

  var Newimg = document.createElement("img");
  Newimg.src = el.newimg;
  Newimg.setAttribute("class","newimgg");

  var image = document.createElement("img");
  image.src = el.image_url[0];
  image.setAttribute("id","imgbody")
  image.addEventListener("click",function(){
      imageclick(el);
  })

  var note = document.createElement("p");
  note.innerText = el.name;

  var price1 = document.createElement("h3");
  price1.innerText = el.price;

  var strike = document.createElement("p");
  strike.innerText = el.strikedoffprice;
  strike.style.textDecoration="line-through";
  strike.style.color = "grey";
  strike.setAttribute("class","strike")

  var div2 = document.createElement("div");
  div2.setAttribute("id","div2")
  var btn = document.createElement("icon");
  btn.setAttribute("class","fas fa-heart");
  btn.setAttribute("id","wishheart");
  btn.style.color = "grey"
  btn.addEventListener("click",function(){
      btnwish(el);
          if(btn.style.color = "grey" ){
              btn.style.color = "red";
              count.innerText = "1";
          }
          else if(btn.style.color = "grey"){
              count.innerText = "0";
          }
  })
  var count = document.createElement("p");
  count.innerText = "0";
  count.setAttribute("id","counter");

   div2.append(btn,count);

  var free = document.createElement("p");
  free.innerText = "Free Shipping";
  free.style.color = "grey";
  free.setAttribute("id","free");

 

  div.append(Newimg ,image,note,price1,strike,div2,free);

  document.querySelector("#filter22").append(div);
});

function imageclick(el){
    var newData =  [];
//   alert("Item Successfully Added To Your Cart")
  newData.push(el);
  localStorage.setItem("cart",JSON.stringify(newData))
  window.location.href='add_to_cart.html'
}

function  btnwish(el){
 
        wishData.push(el);
        console.log(wishData)
        localStorage.setItem("wish",JSON.stringify(wishData));
        totalItemInWishFun();
        alert("Item Successfully Added To Your wish")
}


cartData.map(function(el){
  var div = document.createElement("div");
  div.setAttribute("class"," mySlides")

  var image1 = document.createElement("img");
  image1.src = el.image_url[0];
  image1.setAttribute("id","image1")
  

  var note1 = document.createElement("p");
  note1.innerText = el.name;

  var div3 = document.createElement("div");
  div3.setAttribute("id","div3")

  var price2 = document.createElement("h3");
  price2.innerText = el.price;

  var strike1 = document.createElement("p");
  strike1.innerText = el.strikedoffprice;
  strike1.style.textDecoration="line-through";
  strike1.style.color = "grey";

   div3.append(price2,strike1)
  div.append(image1,note1,div3);

  document.querySelector("#slideshow-container11").append(div);
});



let totalItemInWishFun=()=>{
    let totalItemInWish=document.querySelector('.totalItemInWish')

    let wishItem=JSON.parse(localStorage.getItem('wish'))

    totalItemInWish.innerHTML=wishItem.length;

    totalItemInWish.style.backgroundColor='yellow'

    totalItemInWish.style.color='red'

    totalItemInWish.style.fontWeight='bold'
    


}

totalItemInWishFun();



let totalItemInCartFun=()=>{
    let totalItemIncart=document.querySelector('.totalItemInCart')

    let cartItem=JSON.parse(localStorage.getItem('cartData'))

    console.log(cartItem)
    totalItemIncart.innerHTML=cartItem.length;

    totalItemIncart.style.backgroundColor='yellow'

    totalItemIncart.style.color='red'

    totalItemIncart.style.fontWeight='bold'
    


}

totalItemInCartFun();
