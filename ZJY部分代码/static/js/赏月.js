var img_music = document.getElementById("img")
var audio = document.getElementById("audio")
var test=1/*test = 0，起始状态：播放状态；test=1：暂停状态*/
img_music.onclick = function (){
    if(test === 1){
        img_music.src = "static/img/music-off.png"
        audio.pause()
    }else{
        img_music.src = "static/img/music.png"
        audio.play()
    }
    test = 1-test
}
const app =new Vue({
    el:"#right",

})





