const days  = document.querySelector("#days");
const hours = document.querySelector("#hours");
const min = document.querySelector("#minutes");
const sec = document.querySelector("#sec");
timer();
function timer(){
    const presentyear=new Date();
    const nxtyear=new Date(`January 15 ${presentyear.getFullYear()} 00:00:00`);
    const x=new Date(`January 15 ${nxtyear<=presentyear?presentyear.getFullYear()+1:presentyear.getFullYear()} 00:00:00`);
    const diff=x-presentyear;
    days.innerHTML= Math.floor(diff/1000/60/60/24)<10?"0"+Math.floor(diff/1000/60/60/24):Math.floor(diff/1000/60/60/24);
    hours.innerHTML=Math.floor(diff/1000/60/60%24)<10?"0"+Math.floor(diff/1000/60/60%24):Math.floor(diff/1000/60/60%24);
    min.innerHTML=Math.floor(diff/1000/60%60)<10?"0"+Math.floor(diff/1000/60%60):Math.floor(diff/1000/60%60);
    sec.innerHTML=Math.floor(diff/1000%60)<10?"0"+Math.floor(diff/1000%60):Math.floor(diff/1000%60);
}
setInterval(timer,1000);














