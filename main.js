var da=new Date();
// document.write(da);
var dat=da.getDate();
var mon=da.getMonth();
var yea=da.getFullYear();
var hour=da.getHours();
var minute=da.getMinutes();
var seconds=da.getSeconds();
var day=da.getDay();
function inter(){
    setInterval(() => {
        if(seconds>60){
            seconds=0;
        }
    }, 1000);
}

var date=document.createElement("h1");
date.classList.add("date")
date.innerHTML=dat;

var dd=document.getElementById("date-col");
dd.appendChild(date);

var m_arr=[1,2,3,4,5,6,7,8,9,10,11,12];
var moT=m_arr[mon];
var month=document.createElement("h1");
month.classList.add("month")
month.innerHTML=moT;

var mm=document.getElementById("month-col");
mm.appendChild(month);

var year=document.createElement("h1");
year.classList.add("year")
year.innerHTML=yea;

var yy=document.getElementById("year-col");
yy.appendChild(year);

var hour_=document.createElement("h1");
hour_.classList.add("hour")
hour_.innerHTML=hour;

var hh=document.getElementById("hour-col");
hh.appendChild(hour_);

var minute_=document.createElement("h1");
minute_.classList.add("minute")
setInterval(()=>{minute_.innerHTML= (seconds===0?minute=minute+1:minute)},1000)
// minute_.innerHTML=minute;

var min=document.getElementById("minute-col");
min.appendChild(minute_);


var seconds_=document.createElement("h1");
seconds_.classList.add("seconds")
setInterval(()=>{seconds_.innerHTML=seconds >59?seconds=0:seconds++},1000)
// seconds_.innerHTML=inter();

var ss=document.getElementById("second-col");
ss.appendChild(seconds_);

var daY=document.querySelectorAll(".day");
daY.forEach(function(e,index){
    
    if(day==index){
        var dot=e.firstElementChild;
        var bling=dot.firstElementChild;
        
        bling.style.color="red";
        bling.style.textShadow="0 0 10px Red";
    }
});


if(hour<12){
    var am=document.getElementById("am");
    var iam=am.firstChild;
    iam.style.color="red";
    iam.style.textShadow="0 0 10px red";
}
else{
    var pm=document.getElementById("pm");
    var ipm=pm.firstChild;
    console.log(ipm);
    ipm.style.color="red";
    ipm.style.textShadow="0 0 10px red";
}

