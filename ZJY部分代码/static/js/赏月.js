/*转农历函数*/
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
var bools = 0//当bools为0：说明此时是月亮
var name_lst = ['新月','蛾眉月','上弦月','渐盈凸月','满月','渐亏凸月','下弦月','残月']
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
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
}
important_icon.onclick =async function (){
    if(bools === 0){
        var moon_phase_image = document.getElementById("image")
        for(var i=0;i<=100;i++){
            moon_phase_image.style.opacity = 1-i/100
            await sleep(10)
        }
        moon_phase_image.style.display = 'none'
        moon_phase.style.opacity = 0
        var time_new_phase = 0
        var time_full_phase = 0
        var name_now ='新月'
        moon_phase.innerHTML = '<p><h1>名称：'+name_now+'</h1></p>'+
                                '<p><h2>距离新月：'+time_new_phase.toString()+'天'+'</h2></p>'+
                                '<p><h2>距离满月：'+time_full_phase.toString()+'天'+'</h2></p>'
        for(var j=0;j<=100;j++){
            moon_phase.style.opacity = j/100
            await sleep(10)
        }
    }else{
        for(var j=0;j<=100;j++) {
            moon_phase.style.opacity = 1 - j / 100
            await sleep(10)
        }
        moon_phase.innerHTML = '<img src="img/图层 0.png" alt="" id="image" style="opacity: 0">'
        moon_phase.style.opacity = 1
        var moon_phase_image = document.getElementById("image")
        for(var k=0;k<=100;k++){
            moon_phase_image.style.opacity = k/100
            await sleep(10)
        }
    }
    bools =1-bools
}