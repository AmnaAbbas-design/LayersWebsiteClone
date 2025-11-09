  function openshop(){
      let cart=document.getElementById('maincart2')
     cart.style.transition='all 1s ease-in'
     cart.style.display='block'
    cart.style.right='-18%';
      let  black=document.getElementById('fullBlack');
       black.style.display='block';
       black.style.backgroundColor='rgba(0, 0, 0, 0.7)'
       black.style.opacity='0.7';
       black.style.height='200%'
    }
     function closeshop(){
       let cart=document.getElementById('maincart2')
        cart.style.right='-500px';
        cart.style.transition='all 1s ease-in'
       let  black=document.getElementById('fullBlack');
       black.style.display='none';
    }
    
   
    function blackClick(){
  if (openshop){
        closeshop();}
    if(sideQueryOpen){
          sideQueryclose()
        }
  if(openperson){
    closePerson();
  }
      
    }
    
   function openperson(){
        let logfull=document.getElementById('log')
            logfull.style.transition='all 1s ease-in'
        logfull.style.display='flex'
        logfull.style.right='-10px';
     let  black=document.getElementById('fullBlack');
       black.style.display='block';
       black.style.backgroundColor='rgba(0, 0, 0, 0.7)'
       black.style.opacity='0.7';
       black.style.height='200%'

    }
    function closePerson(){
      let logfull=document.getElementById('log')
        logfull.style.right='-500px';
         let person=document.getElementById('iam')
        person.style.display='block'
         let  black=document.getElementById('fullBlack');
       black.style.display='none';
    }

    function sideQueryOpen(){
      let querySide=document.getElementById('mainSideBar')
       querySide.style.transition='all 1s ease-in'
       querySide.style.left='0%';
        let  black=document.getElementById('fullBlack');
       black.style.display='block';
       black.style.backgroundColor='rgba(0, 0, 0, 0.7)'
       black.style.opacity='0.7';
       black.style.height='200%'
      
    }
     function sideQueryclose(){
      console.log("i am close")
      let querySide=document.getElementById('mainSideBar')
       querySide.style.left='-100%'
        querySide.style.transition='all 1s ease-in'
        let  black=document.getElementById('fullBlack');
       black.style.display='none';
      }
  //adder
  let low=document.getElementsByClassName('low')
  let high=document.getElementsByClassName('high')
  let displayNum=document.getElementsByClassName('displayNum')  

for(let i=0;i<high.length;i++){
  high[i].addEventListener("click",()=>{
console.log("working high"+i)
let value=displayNum[i].value;
valuedis=parseInt(value)+1;
displayNum[i].value=(valuedis)
  })
}
for(let i=0;i<low.length;i++){
  low[i].addEventListener("click",()=>{

console.log("working high"+i)
let value=displayNum[i].value;
if(value>1){
valuedis=parseInt(value)-1;
displayNum[i].value=(valuedis)}
  })
}

// load button
let LoadBtn=document.getElementById('buttonOfLoad')
let more=document.getElementById('more')
LoadBtn.addEventListener("click",()=>{
more.style.display='block'
LoadBtn.style.display='none'
})
