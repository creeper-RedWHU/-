const toCnDate = date => date.toLocaleString('zh-u-ca-chinese', { dateStyle: 'full' }) + ' ' + date.toLocaleTimeString(0, { hour12: false });
var moon_phase = document.getElementById("img")
var calendar = document.getElementById("calendar")
var important_icon = document.getElementById("important")
var time_stamp = new Date()
var year = time_stamp.getFullYear(); //获取完整的年份(4位)
var month =time_stamp.getMonth()+1;  //获取当前月份(1-12,1代表1月)
var day =time_stamp.getDate();  //获取当前日(1-31)
var time_area = document.getElementById("time")
var lunarDate = toCnDate(new Date()).slice(4,14)
var month_str = (month<10)?'0'+ month.toString(): month.toString()
var day_str = (month<10)?'0'+day.toString():day.toString()
var week = time_stamp.getDay();   //获取当前星期X(0-6,0代表星期天)
var weekList = ['天','一','二','三','四','五','六']
var dateList = [year.toString()+'.'+month_str+'.'+day_str+' 星期'+weekList[week],lunarDate]
var ptr = 0
window.onload = function (){
    time_area.innerHTML =dateList[ptr]
}
time_area.onclick = function (){
    if(ptr<dateList.length-1){
        ptr+=1
    }else{
        ptr = 0
    }
    time_area.innerHTML = dateList[ptr]
}