/*转农历函数*/
const toCnDate = date => date.toLocaleString('zh-u-ca-chinese', { dateStyle: 'full' }) + ' ' + date.toLocaleTimeString(0, { hour12: false });
var moon_phase = document.getElementById("img")
var back_button =document.getElementById("back_button")
back_button.onclick = function (){
    window.location.href="";
//     这里写返回图片转入的地址
}
function sx(year){
    switch ((year-2020)%12){
        case 0:return '鼠';break;
        case 1:return '牛';break;
        case 2:return '虎';break;
        case 3:return "兔";break;
        case 4:return '龙';break;
        case 5:return '蛇';break;
        case 6:return '马';break;
        case 7:return '羊';break;
        case 8:return '猴';break;
        case 9:return '鸡';break;
        case 10:return '狗';break;
        case 11:return '猪';break;
    }
}
var calendar = document.getElementById("calendar")
var important_icon = document.getElementById("important")
var time_stamp = new Date()
var year = time_stamp.getFullYear(); //获取完整的年份(4位)
var month =time_stamp.getMonth()+1;  //获取当前月份(1-12,1代表1月)
var day =time_stamp.getDate();  //获取当前日(1-31)
var time_area = document.getElementById("time")
var lunarDate = toCnDate(new Date()).slice(4,14)
var lunarDate_add = lunarDate.slice(0,2)+sx(year)+lunarDate.slice(2)
var month_str = (month<10)?'0'+ month.toString(): month.toString()
var day_str = (month<10)?'0'+day.toString():day.toString()
var week = time_stamp.getDay();   //获取当前星期X(0-6,0代表星期天)
var weekList = ['天','一','二','三','四','五','六']
var dateList = [year.toString()+'.'+month_str+'.'+day_str+' 星期'+weekList[week],lunarDate_add]
var ptr = 0
var bools = 0//当bools为0：说明此时是月亮
var name_lst = ['新月','蛾眉月','上弦月','渐盈凸月','满月','渐亏凸月','下弦月','残月']
var url_img = 'img/赏月/'+lunarDate.slice(5,7)+'400.png'
// 1900-2100年份,网络摘抄
var lunarInfo = [0x4bd8, 0x4ae0, 0xa570, 0x54d5, 0xd260, 0xd950, 0x5554, 0x56af, 0x9ad0, 0x55d2,
    0x4ae0, 0xa5b6, 0xa4d0, 0xd250, 0xd295, 0xb54f, 0xd6a0, 0xada2, 0x95b0, 0x4977,
    0x497f, 0xa4b0, 0xb4b5, 0x6a50, 0x6d40, 0xab54, 0x2b6f, 0x9570, 0x52f2, 0x4970,
    0x6566, 0xd4a0, 0xea50, 0x6a95, 0x5adf, 0x2b60, 0x86e3, 0x92ef, 0xc8d7, 0xc95f,
    0xd4a0, 0xd8a6, 0xb55f, 0x56a0, 0xa5b4, 0x25df, 0x92d0, 0xd2b2, 0xa950, 0xb557,
    0x6ca0, 0xb550, 0x5355, 0x4daf, 0xa5b0, 0x4573, 0x52bf, 0xa9a8, 0xe950, 0x6aa0,
    0xaea6, 0xab50, 0x4b60, 0xaae4, 0xa570, 0x5260, 0xf263, 0xd950, 0x5b57, 0x56a0,
    0x96d0, 0x4dd5, 0x4ad0, 0xa4d0, 0xd4d4, 0xd250, 0xd558, 0xb540, 0xb6a0, 0x95a6,
    0x95bf, 0x49b0, 0xa974, 0xa4b0, 0xb27a, 0x6a50, 0x6d40, 0xaf46, 0xab60, 0x9570,
    0x4af5, 0x4970, 0x64b0, 0x74a3, 0xea50, 0x6b58, 0x5ac0, 0xab60, 0x96d5, 0x92e0,
    0xc960, 0xd954, 0xd4a0, 0xda50, 0x7552, 0x56a0, 0xabb7, 0x25d0, 0x92d0, 0xcab5,
    0xa950, 0xb4a0, 0xbaa4, 0xad50, 0x55d9, 0x4ba0, 0xa5b0, 0x5176, 0x52bf, 0xa930,
    0x7954, 0x6aa0, 0xad50, 0x5b52, 0x4b60, 0xa6e6, 0xa4e0, 0xd260, 0xea65, 0xd530,
    0x5aa0, 0x76a3, 0x96d0, 0x4afb, 0x4ad0, 0xa4d0, 0xd0b6, 0xd25f, 0xd520, 0xdd45,
    0xb5a0, 0x56d0, 0x55b2, 0x49b0, 0xa577, 0xa4b0, 0xaa50, 0xb255, 0x6d2f, 0xada0,
    0x4b63, 0x937f, 0x49f8, 0x4970, 0x64b0, 0x68a6, 0xea5f, 0x6b20, 0xa6c4, 0xaaef,
    0x92e0, 0xd2e3, 0xc960, 0xd557, 0xd4a0, 0xda50, 0x5d55, 0x56a0, 0xa6d0, 0x55d4,
    0x52d0, 0xa9b8, 0xa950, 0xb4a0, 0xb6a6, 0xad50, 0x55a0, 0xaba4, 0xa5b0, 0x52b0,
    0xb273, 0x6930, 0x7337, 0x6aa0, 0xad50, 0x4b55, 0x4b6f, 0xa570, 0x54e4, 0xd260,
    0xe968, 0xd520, 0xdaa0, 0x6aa6, 0x56df, 0x4ae0, 0xa9d4, 0xa4d0, 0xd150, 0xf252,
    0xd520];
/*返回农历y年m月的总天数*/
function monthDays(y, m) {
    return ((lunarInfo[y - 1900] & (0x10000 >> m)) ? 30 : 29);
}
function calcMonth(name){
    var month_lst = ['一','二','三','四','五','六','七','八','九','十','冬','腊']
    for(var l=0;l<month_lst.length;l++)
    {
        if(month_lst[l] === name.slice(3,4)){return l+1}
    }
}
var thisMax =monthDays(year,calcMonth(lunarDate))
window.onload = function (){
    time_area.innerHTML =dateList[ptr]
    var moon_phase_image = document.getElementById("image")
    moon_phase_image.src = url_img
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
/*返回农历的数字形式时间*/
function calculate_new_birth(date){
    var datelst = ['一','二','三','四','五','六','七','八','九']
    if(date[0] === '初'){
        for(var name = 0;name<10;name++){
            if(datelst[name]===date[1]){
                return name+1
            }
        }
    }else if(date[0] === '廿'){
        for(var name = 0;name<10;name++){
            if(datelst[name]===date[1]){
                return (20+name+1)
            }
        }
    }else if(date[0] === '三'){return 30}
    else{
        for(var name = 0;name<10;name++){
            if(datelst[name]===date[1]){
                return (10+name+1)
            }
        }
    }
}
/*返回名称*/
function name_now_calc(date){
    if(date === 1){return '新月'}
    else if(date<7){return '蛾眉月'}
    else if(date === 8){return '上弦月'}
    else if(date<=14){return '渐盈凸月'}
    else if(date === 15){return '满月'}
    else if(date<=23){return '渐亏凸月'}
    else if(date===24){return '下弦月'}
    else{return '残月'}
}
/*切换模式*/
important_icon.onclick =async function change_mode(){
    console.log('change mode called')
    if(bools === 0){
        important_icon.title = '切换到当日月相'
        var moon_phase_image = document.getElementById("image")
        for(var i=0;i<=100;i++){
            moon_phase_image.style.opacity = 1-i/100
            await sleep(10)
        }
        moon_phase_image.style.display = 'none'
        moon_phase.style.opacity = 0
        var time_now = calculate_new_birth(lunarDate.slice(5,7))
        var time_new_phase = thisMax-time_now+1
        var time_full_phase = ((15-time_now)>0)?(15-time_now):(thisMax-time_now+15)
        if(time_full_phase === 0){time_full_phase = '今'}
        else if(time_full_phase === 1){time_full_phase = '明'}
        if(time_new_phase === 0){time_new_phase = '今'}
        else if(time_new_phase === 1){time_new_phase = '明'}
        var name_now =name_now_calc(time_now)
        moon_phase.innerHTML = '<p><h1>'+name_now+'</h1></p>'+
                                '<p><h2>下一次新月：'+time_new_phase.toString()+'天'+'</h2></p>'+
                                '<p><h2 id="h22">下一次满月：'+time_full_phase.toString()+'天'+'</h2></p>'
        for(var j=0;j<=100;j++){
            moon_phase.style.opacity = j/100
            await sleep(10)
        }
    }else{
        important_icon.title = '切换到当日详细信息'
        for(var j=0;j<=100;j++) {
            moon_phase.style.opacity = 1 - j / 100
            await sleep(10)
        }
        moon_phase.innerHTML = '<img src="img/图层 0.png" alt="" id="image" style="opacity: 0">'
        var moon_phase_image = document.getElementById("image")
        moon_phase_image.src = url_img
        moon_phase.style.opacity = 1
        for(var k=0;k<=100;k++) {
            moon_phase_image.style.opacity = k / 100
            await sleep(10)
        }
    }
    bools =1-bools
}
function numSwitchToName(num){
    var lst = ['一','二','三','四','五','六','七','八','九','十']
    num =(num%thisMax+1 === num)?num: (num%(thisMax+1)+1)
    if(num<=10){return "初"+lst[num-1]}
    else if(num<20){return '十'+lst[num-11]}
    else if(num===20){return '二十'}
    else if(num<30){return '廿'+lst[num-21]}
    else {return '三十'}
}
function write_form(day,week){
    /*接受的是一个数字类型的农历时间：起始时间*/
    /*然后返回的是一个字符串，含ul和li*/
    var ans = '<ul>'
    for(var i = 0;i<7;i++){
        ans+='<li style="text-align: center;display: inline-block" title="跳转到这一天" id="'+i.toString()+'">'+
            '<img src=img/赏月/'+numSwitchToName(day+i)+'200.png>'+
            '<h2 class="textInLi">星期'+weekList[(week+i)%7]+'</h2></li>'
    }
    ans+='</ul>'
    return ans
}
var switchers = 0
calendar.onclick = function (){
    if(switchers === 0){
        var box = document.getElementById("box")
        console.log("insert mode called")
        box.innerHTML+='<h1 class="title">未来七天月相</h1>'+write_form(calculate_new_birth(lunarDate.slice(5,7)),week)
        switchers = 1
    }else{
        var box = document.getElementById("box")
        console.log('delete mode called')
        box.innerHTML = '<img src="img/calendar.png" title="未来一周月相" id="calendar">' +
                '<img src="img/icons8-box-important-50.png" title="切换到当日详细信息" id="important">'
        switchers = 0
    }
}