/*txt：诗歌的主体*/
var txt = document.getElementById("textarea_submit")
txt.onclick = function (){
    txt.style.opacity = 1
    txt.style.border ='1px solid black'
}
/*诗歌的标题*/
var title_box = document.getElementById('title_box')
txt.onblur = function (){
    console.log(this.value)
    txt.style.opacity = 0.5
    txt.style.border ='1px solid rgb(210,210,210,0.5)'
}
title_box.onclick = function (){
    if(title_box.value === '输入你的标题'){
        title_box.value = ""
    }title_box.opacity = 1
}
title_box.onblur = function (){
    if(title_box.value === ''){
        title_box.value = "输入你的标题"
    }title_box.opacity = 0.5
}
var writer_box = document.getElementById("writer_box")
writer_box.onclick = function (){
    if(writer_box.value === '输入作者姓名'){
        writer_box.value = ""
    }writer_box.opacity = 1
}
writer_box.onblur = function (){
    if(writer_box.value === ''){
        writer_box.value = "输入作者姓名"
    }writer_box.opacity = 0.5
}
var writer_name = ''
var title = '' //现存诗歌的标题
var lst =[''] //现存诗歌的句子
var ptr =1
var name ='' //现存诗歌的诗人
var history = [[0,0,0]] // 保存的诗歌：来做历史记录
var history_ptr = 1
var back_button = document.getElementById("back_button")
var btn =document.getElementById("btn")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var h1=document.getElementById("h1")
var text_area = document.getElementById("text_area")
btn.onclick = function (){
    if(writer_box.value === ' ' || title_box.value===' ' || txt.value === '') {
        alert('请输入数据！')
        title_box.value='输入你的标题'
        txt.value = ''
        writer_box.value = '输入作者姓名'
    }else {
        name = txt.value
        var tail = 0
        for (var i = 0; i < name.length; i++) {
            if (name[i] === '\n' || name[i] === ',' || name[i] === '，') {
                lst[ptr] = name.slice(tail, i)
                tail = i + 1
                ptr += 1
            }
        }
        title = title_box.value
        lst[ptr] = name.slice(tail, name.length)
        writer_name = writer_box.value
        title_box.value = '输入你的标题'
        txt.value = ''
        writer_box.value = '输入作者姓名'
        history[history_ptr] = [title, writer_name, lst]
        ptr = history_ptr
        history_ptr += 1
        var cache = history[history_ptr - 1]
        text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
                            '<p style="float:right;width: 100%" class="writer_name">'
                            +cache[1]+'</p>'+'<p class="text">'
        for(var j =0;j<cache[2].length;j++){
            text_area.innerHTML += cache[2][j] + '<br>'
        }
        text_area.innerHTML += '</p>'
        h1.innerHTML = '切换诗歌'+(history_ptr-1).toString()+'/'+(history_ptr-1).toString()
    }
}
back_button.onclick = function (){
    window.location.href="";
//     这里写返回图片转入的地址
};
/*prev:前调数据*/
prev.onclick = function (){
    if(ptr >1){
        ptr -= 1
    }else{
        ptr = history_ptr-1
    }var cache = history[ptr]
    text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
        '<p style="float:right;width: 100%" class="writer_name">'
        +cache[1]+'</p>'+'<p class="text">'
    for(var j =0;j<cache[2].length;j++){
        text_area.innerHTML += cache[2][j] + '<br>'
    }
    text_area.innerHTML += '</p>'
    h1.innerHTML = '切换诗歌'+(ptr).toString()+'/'+(history_ptr-1).toString()
}
next.onclick = function (){
    if(ptr <history_ptr-1){
        ptr += 1
    }else{
        ptr = 1
    }var cache = history[ptr]
    text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
        '<p style="float:right;width: 100%" class="writer_name">'
        +cache[1]+'</p>'+'<p class="text">'
    for(var j =0;j<cache[2].length;j++){
        text_area.innerHTML += cache[2][j] + '<br>'
    }
    text_area.innerHTML += '</p>'
    h1.innerHTML = '切换诗歌'+(ptr).toString()+'/'+(history_ptr-1).toString()
}
