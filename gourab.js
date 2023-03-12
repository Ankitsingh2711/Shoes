
 let page1all=function(){
   
function first(){
   document.querySelector("#c1").style.left="100%"

   gsap.to('#c2',{
      left:"0%",
      ease:Power2.ease,
      duration:0.8,
   })
}


function second(){
   document.querySelector('#c2').style.left="100%";
   gsap.to('#c1',{
      left:"0%",
      ease:Power2.ease, 
      duration:0.8,
   }) 
}

document.querySelector('#left').addEventListener("click",function(){
   first();
})

document.querySelector('#right').addEventListener("click",function(){
   second();
})


document.querySelector('#small1').addEventListener('click',function(){
   first();
})


document.querySelector('#small2').addEventListener('click',function(){
   second();
})


   gsap.from("#written",{
   y:"110%",
   duration:2,
   
   })
 }


 page1all();



//   page1= complete


let page2all=function(){
   
var clutter="";
let img_container=[
   {name:"ankit-thakur" ,img:"https://i.pinimg.com/564x/6d/2c/cc/6d2cccb31757c266dc5bd3d1fccb1566.jpg"},
   {name:"ankit-thakur",img:"https://i.pinimg.com/564x/75/25/f9/7525f910562f21b53cb1fda5d5e4a611.jpg"},
   {name:"ankit-thakur",img:"https://i.pinimg.com/564x/9d/d0/bc/9dd0bce9a1d5046cf23ff74038f68000.jpg"},
   {name:"ankit-thakur",img:"https://i.pinimg.com/564x/d6/07/44/d60744f8aab8aad64b3df55df74c41ed.jpg"},
]

img_container.forEach(function(val,index){
   clutter+=` <div id="inter${index}" class="mainimg">
   <div class="imgp2" id="imgp2${index}">
    
   </div>
   <div id="imgesp2${index}" class="imgesp2">
     <div id="imgcontainer">
     <img id="img0" src="https://media.istockphoto.com/id/936500250/photo/colourful-shoes-on-isolated-white-background-inside-view.jpg?s=612x612&w=0&k=20&c=m5_VWcxdXT6ug5dAFzBq_1J3DPzfPN7DN117wO62a90=" alt="">
     <img id="img1" src="https://media.istockphoto.com/id/1382165930/photo/white-sport-sneaker-on-a-white-isolated-background-woman-and-mens-fashion-sport-shoe-sneakers.jpg?s=612x612&w=0&k=20&c=v-uXZKRjWWiNNu8ihDXudnF-Ejfj77Se944o4v-Igao=" alt="">
     <img id="img2" src="https://media.istockphoto.com/id/1197142286/photo/white-sneaker-with-blue-stripes-on-a-white-background-sport-shoes.jpg?s=612x612&w=0&k=20&c=_OAMtrfq0uxjI4JJwCrFNRtOK0fz2UXoqvticSanuRk=" alt="">          
   </div>
     <div id="star">
       <i class="ri-star-line"></i>
       <i class="ri-star-line"></i>
       <i class="ri-star-line"></i>
       <i class="ri-star-line"></i>
       <i class="ri-star-line"></i>
     </div>

     <div id="price">
       <h1>${val.name}</h1>
       <p>mans shoes nike jorden</p>
       <h2>$ 120</h2>
     </div>

   </div>
   
 </div>`
})

document.querySelector("#centrep2").innerHTML=clutter;


img_container.forEach(function(val,index){

   document.querySelector(`#imgp2${index}`).style.backgroundImage=`url(${val.img})`;
   
   
   
   });






for(let i=0;i<4;i++){

   document.querySelector(`#inter${i}`).addEventListener("mouseenter",function(){
   
         gsap.to(`#inter${i}>#imgesp2${i}`,{
            top:"85%",
         })
      
      })
      
      document.querySelector(`#inter${i}`).addEventListener("mouseleave",function(){
         
         gsap.to(`#inter${i}>#imgesp2${i}`,{
            top:"64%",
         })
      
      })
}
}


page2all();






// page3 start


function paeg3func(){


   
for(let i=1; i<=4;i++){

   document.querySelector(`#centrep3>#mainimgp3${i}`).addEventListener('mouseenter',function(){

      gsap.to(`#imgesp3${i}`,{
         top:"85%",
      })
   })

   document.querySelector(`#centrep3>#mainimgp3${i}`).addEventListener('mouseleave',function(){

      gsap.to(`#imgesp3${i}`,{
         top:"64%",
      })
   
   })

}}
paeg3func();




// page4





let page4all=function(){
   document.querySelector('#page4').addEventListener("mousemove" ,function(dets){

 
      if(dets.x<800){
         document.querySelector('#imgp4>img').style.left='56%';
   
      }
      else{
         document.querySelector('#imgp4>img').style.left='53%';
         
      }
   
   })
   
   document.querySelector('#page4').addEventListener("mousemove" ,function(dets){
   
    
      if(dets.y<400){
         document.querySelector('#imgp4>img').style.top='46%';
   
      }
      else{
         document.querySelector('#imgp4>img').style.top='48%';
         
      }
   
   })
}
page4all();


 
// page5

let page5all=function(){
   
var shoe_div =[
   {name:"gourab" ,img:"https://i.pinimg.com/236x/29/e7/05/29e705227f8565b1003707eb46586ff6.jpg" },
   {name:"ankitr",img:"https://i.pinimg.com/236x/cf/b8/43/cfb8439e84e6ee310e001b61d65e2347.jpg" },
   {name:"shoes3" ,img:"https://i.pinimg.com/236x/cf/b8/43/cfb8439e84e6ee310e001b61d65e2347.jpg"},
   {name:"shoes4" ,img:"https://i.pinimg.com/236x/cf/b8/43/cfb8439e84e6ee310e001b61d65e2347.jpg"},
   {name:"shoes5" ,img:"https://i.pinimg.com/236x/61/d3/63/61d363cfed6755ad872563e1adde8208.jpg"},
   {name:"shoes6" ,img:"https://i.pinimg.com/236x/46/be/f5/46bef5a0fd4423a7e28aac9a7d77ce00.jpg"},
   {name:"shoes7" ,img:"https://i.pinimg.com/236x/5f/5f/be/5f5fbea29dad36d239a850a54ea94e3a.jpg"},
   {name:"shoes8" ,img:"https://i.pinimg.com/236x/df/f8/54/dff854b1870973c25abf446c53cdd3f1.jpg"},
   {name:"shoes8" ,img:"https://i.pinimg.com/236x/df/f8/54/dff854b1870973c25abf446c53cdd3f1.jpg"},
   {name:"shoes8" ,img:"https://i.pinimg.com/236x/8c/e7/3c/8ce73cebe5b5bedcc2414a0261219028.jpg"},
   {name:"shoes8" ,img:"https://i.pinimg.com/236x/8c/e7/3c/8ce73cebe5b5bedcc2414a0261219028.jpg"},
   {name:"shoes8" ,img:"https://i.pinimg.com/236x/8c/e7/3c/8ce73cebe5b5bedcc2414a0261219028.jpg"},
]

  let clutterp5="";

  shoe_div.forEach(function(val,index){
   clutterp5+=`<div id="shoediv${index}" class="shoediv">
   <div id="inimg" class="inimg">
   <img src="${val.img}" alt="">
 </div>
<div id="downp5${index}" class="downp5">
 <div id="circle1" class="circle"><i class="ri-more-line"></i></div>
 <div id="circle2" class="circle"><i class="ri-search-line"></i></div>
 <div id="circle3" class="circle"><i class="ri-heart-line"></i></div>
</div> 
<div id="textareap5">
 <h2>${val}</h2>
 <p>$150.2</p>
</div>

 </div>`
  })
  document.querySelector("#centreboxs").innerHTML=clutterp5;


for(let i=0;i<12; i++){

   document.querySelector(`#downp5${i}`).addEventListener("mouseenter",function(){

      
      gsap.to(`#downp5${i}>#circle1`,{
         left:'10%',
         })
         gsap.to(`#downp5${i}>#circle3`,{
            left:'80%',
            })
   })

   document.querySelector(`#downp5${i}`).addEventListener("mouseleave",function(){

      
      gsap.to(`#downp5${i}>#circle1`,{
         left:'50%',
         })
         gsap.to(`#downp5${i}>#circle3`,{
            left:'50%',
            })
   })
}


  

   
}

page5all();