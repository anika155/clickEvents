const canvas=document.getElementById("canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
const tool=canvas.getContext("2d");

//! Circles-$ step process
// tool.fillStyle="seagreen"; //step-1
// tool.beginPath(); //Step-2
// tool.arc(100,200,40,0,Math.PI*2); //Step-3
// tool.fill(); //Step-4
let Xc;
let Yc;
let Xr;
let Yr;





document.addEventListener("mousedown",(e)=>{
    console.log(e);
    if(e.ctrlKey===true) {
        console.log(e);
        Xr=e.clientX;
        Yr=e.clientY;
        tool.fillStyle="marine";
        tool.fillRect(Xr-40,Yr-40,100,100);
    }
    else if(e.ctrlKey===false) {
        console.log(e);
        Xc=e.clientX;
        Yc=e.clientY;  
        tool.fillStyle="yellow";
        tool.beginPath();
        tool.arc(Xc,Yc,80,0,Math.PI*2);
        tool.fill();
        tool.save();
    }
   
});




