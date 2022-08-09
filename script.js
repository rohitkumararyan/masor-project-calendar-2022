
 var dat=new Date();

 function renderDate(){
   

 var day=dat.getDay();
  console.log(dat.getDay());
 var EndDate=new Date(
    dat.getFullYear(),
    dat.getMonth()+1,
    0
 ).getDate();

 var prevDate=new Date(
    dat.getFullYear(),
    dat.getMonth(),0
 ).getDate();

 var today=new Date();

 var months=[
"January",
 "February",
 "March",
 "April",
 "May",
 "June",
 "July",
 "August",
 "September",
 "October",
 "November",
 "December"];

 document.getElementById("date_str").innerHTML=dat.toDateString();
 document.getElementById("month").innerHTML=months[dat.getMonth()];



 var sell="";

 for(x=day; x>0; x--){
    sell+="<div class='prev_date'>"+(prevDate - x+1)+ "</div>";
 }
 for(i =1; i<EndDate; i++){
    if( i == today.getDate() && dat.getMonth()== today.getMonth()){
        sell+="<div class='today'>"+i+ "</div>";
    }else{
        sell+="<div>"+i+ "</div>";
    }

 }
 document.getElementsByClassName("days")[0].innerHTML=sell;
  
 }

   
 function movedate(para){
    if( para == 'prev'){
        dat.setMonth(dat.getMonth()-1)
        renderDate();
    }
    if( para == 'next'){
        dat.setMonth(dat.getMonth()+1)
        renderDate();
    }
 }
 function showTime(){
   var dat=new Date();
   document.getElementById("Time").innerHTML=dat.toLocaleTimeString();
 }
 setInterval(showTime,1000);