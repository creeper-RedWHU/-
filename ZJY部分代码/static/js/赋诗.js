/*txt：诗歌的主体*/
var txt = document.getElementById("textarea_submit")
txt.onclick = function (){
    txt.style.opacity = 1
    txt.style.border ='1px solid black'
}
function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time));
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
var ptr =1
var name ='' //现存诗歌的诗人
var history = [[0,0,0]] // 保存的诗歌：来做历史记录
var history_ptr = 1
var btn =document.getElementById("btn")
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var h1=document.getElementById("h1")
var text_area = document.getElementById("text_area")
var plus_area = document.getElementById("container-plus")
var close_card = document.getElementById("close")
/*写贺卡函数*/
async function write_card(title, writer, poem, close_card) {
    windows.style.opacity = '0'
    windows.style.display = 'block'
    var area = document.getElementById("window_content")
    document.getElementById("window_content").innerHTML = ' '
    area.innerHTML = '<img src="../../img/icons8-close-26.png" id="closeButton" onclick="closeFn()">'
    area.innerHTML += '<h1>' + title + '</h1>' + '<h2 style="font-size: 1.6em">' + writer + '</h2>'
    for (var item = 0; item < poem.length; item++) {
        area.innerHTML += '<h4 class="text">' + poem[item] + '</h4>'
    }
    for (var k = 0; k <= 100; k++) {
        windows.style.opacity = k / 100
        await sleep(10)
    }

}
var windows =document.getElementById("window")
async function closeFn() {
    for (var k = 0; k <= 100; k++) {
        document.getElementById("window").style.opacity = 1-k / 100
        await sleep(10)
    }
    document.getElementById("window").style.display = 'none'
    document.getElementById("window_content").innerHTML = ' '
}
btn.onclick = function (){
    if(writer_box.value === ' ' || title_box.value===' ' || txt.value === '' ) {
        alert('请输入数据！')
        title_box.value='输入你的标题'
        txt.value = ''
        writer_box.value = '输入作者姓名'
    }else {
        var lst =[''] //现存诗歌的句子
        var ptr_temporary = 0
        name = txt.value
        var tail = 0
        for (var i = 0; i < name.length; i++) {
            if (name[i] === '\n' || name[i] === ',' || name[i] === '，' || name[i] === '。') {
                lst[ptr_temporary] = name.slice(tail, i)
                tail = i + 1
                ptr_temporary += 1
            }
        }
        title = title_box.value
        lst[ptr_temporary] = name.slice(tail, name.length)
        lst=lst.filter(str => !!str)
        writer_name = writer_box.value
        title_box.value = '输入你的标题'
        txt.value = ''
        writer_box.value = '输入作者姓名'
        if(title === '输入你的标题'){title = '无题'}
        if(writer_name === '输入作者姓名'){writer_name = '匿名'}
        history[history_ptr] = [title, writer_name, lst]
        ptr = history_ptr
        history_ptr += 1
        var cache = history[ptr]
        text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
                            '<p style="float:right;width: 100%" class="writer_name">作者：'
                            +cache[1]
        for(var j =0;j<cache[2].length;j++){
            text_area.innerHTML += '<p class="text">'+cache[2][j]
        }
        h1.innerHTML = '切换诗歌'+(history_ptr-1).toString()+'/'+(history_ptr-1).toString()
        window.location.href="#window";
        write_card(cache[0],cache[1],cache[2],close_card)
    }
}

/*prev:前调数据*/
prev.onclick = function (){
    if(history_ptr === 1){
    }else {
    if(ptr >1){
        ptr -= 1
    }else{
        ptr = history_ptr-1
    }
    var cache = history[ptr]
        text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
                            '<p style="float:right;width: 100%" class="writer_name">作者：'
                            +cache[1]
        for(var j =0;j<cache[2].length;j++){
            text_area.innerHTML += '<p class="text">'+cache[2][j]
        }
    h1.innerHTML = '切换诗歌'+(ptr).toString()+'/'+(history_ptr-1).toString()
    }
}
next.onclick = function (){
    if(history_ptr === 1){}
    else {
        if(ptr <history_ptr-1){
            ptr += 1
        }else{
            ptr = 1
        }
         var cache = history[ptr]
            text_area.innerHTML = '<h2>'+cache[0]+'</h2>'+
                                '<p style="float:right;width: 100%" class="writer_name">作者：'
                                +cache[1]
            for(var j =0;j<cache[2].length;j++){
                text_area.innerHTML += '<p class="text">'+cache[2][j]
            }
        h1.innerHTML = '切换诗歌'+(ptr).toString()+'/'+(history_ptr-1).toString()
    }
}
var dele = document.getElementById("delete")
dele.onclick = function (){
    /*删除的是ptr位置的元素，就让后面的填充，然后修改history_ptr*/
    if(history_ptr === 1){
        alert('当前没有可供删除的历史记录')
    }else if(ptr === history_ptr-1){
        history_ptr-=1;ptr-=1
        delete history[history_ptr]
    }else{
        for(var name =ptr;name<history_ptr-1;name++){
            history[name] = history[name+1]
        }
        history_ptr-=1
        delete history[history_ptr]
    }
    if(history_ptr>1) {
        var cache = history[ptr]
        text_area.innerHTML = '<h2>' + cache[0] + '</h2>' +
            '<p style="float:right;width: 100%" class="writer_name">'
            + cache[1] + '<p class="text">'+ cache[2][0]
        for (var j = 0; j < cache[2].length; j++) {
            text_area.innerHTML += '<p class="text">'+cache[2][j]
        }
        h1.innerHTML = '切换诗歌'+(ptr).toString()+'/'+(history_ptr-1).toString()
    }else{
        ptr = history_ptr = 1
        text_area.innerHTML = '<img src="../../templates/icons8-alert-30.png" alt="" ><h2>当前还没有创作诗歌！</h2>'
        h1.innerHTML = '切换诗歌'+'0'+'/'+'0'
    }
}
text_area.onclick = function (){
    if(history_ptr>1){
    write_card(history[history_ptr - 1][0], history[history_ptr - 1][1], history[history_ptr - 1][2])
    }else{
        alert('当前没有创作历史，无法生成明信片！')
    }
}