var mooncake = document.getElementById("mainimg");
var rabbit = document.getElementById("additionimg");
var pop = document.getElementById("pop");
var myAudio = document.getElementById("myAudio");

var imgList = [
    "../img/五仁.png",
    "../img/五仁2.png",
    "../img/五仁3.png",
    "../img/五仁4.png",
    "../img/五仁5.png",
    "../img/五仁6.png",
    "../img/五仁7.png"
]
var index = 0;

mooncake.onclick = function(){
    if(index != 0){
        myAudio.play();
    }
    index+=1;
    if (index == 7){
        var opacity = 0;
        pop.style.opacity = opacity;
        pop.style.visibility = "visible";
        var appear = setInterval(() => {
            if (opacity < 1){
                opacity +=0.05;
                pop.style.opacity = opacity;
            }
        }, 50);
    }else{
        var opacity = 1;
        var fade = setInterval(() => {
            if (opacity > 0){
                opacity -= 0.05;
                mooncake.style.opacity = opacity;
            }else{
                rabbit.style.visibility = 'visible';
                if(document.body.clientWidth >= 500)mooncake.style.width = "500px";
                clearInterval(fade);
                mooncake.src = imgList[index];
                opacity = 0;
                var appear = setInterval(() => {
                    if (opacity < 1){
                        opacity += 0.05;
                        mooncake.style.opacity = opacity;
                    }
                }, 50);
            }
        }, 50);
        
    }
}