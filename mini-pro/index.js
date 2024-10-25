const on = document.getElementById('on');
 const off = document.getElementById( 'off');
 const lamp = document.getElementById('lamp');

 function isLampBroken(){
    return lamp.src.indexOf('quebrada')>-1
 }

  function lampOn () {
   if (! isLampBroken ()){
 
  
    lamp.src='./img/ligada.jpg';
  }
}
    function lampOff (){
      if (! isLampBroken ()){

        lamp.src= './img/desligada.jpg'
    }
   }
        function mouseover (){

        }
 function lamBroken(){
    lamp.src ='./img/quebrada.jpg'
 }

 on.addEventListener('click',lampOn);
 off.addEventListener('click',lampOff);
  lamp.addEventListener('mouseover',lampOn);
  lamp.addEventListener('mouseleave',lampOff);
 lamp.addEventListener('dblclick',lamBroken);

