var mooncake = document.getElementById("mainimg");
var rabbit = document.getElementById("additionimg");
var pop = document.getElementById("pop");
var myAudio = document.getElementById("myAudio");

var imgList = [
    "../img/蛋黄.png",
    "../img/蛋黄2.png",
    "../img/蛋黄3.png",
    "../img/蛋黄4.png",
    "../img/蛋黄5.png",
    "../img/蛋黄6.png",
    "../img/蛋黄7.png"
];

var index = 0;
var isAnimating = false;

mooncake.onclick = function () {
    if (!isAnimating) {
        isAnimating = true;

        if (index !== 0) {
            myAudio.play();
        }

        index += 1;

        if (index === 7) {
            // 处理弹出效果
            var opacity = 0;
            pop.style.opacity = opacity;
            pop.style.visibility = "visible";
            var appear = setInterval(() => {
                if (opacity < 1) {
                    opacity += 0.05;
                    pop.style.opacity = opacity;
                } else {
                    clearInterval(appear);
                    isAnimating = false; // 允许下一次点击
                }
            }, 50);
        } else {
            // 处理图片淡出和淡入效果
            var opacity = 1;
            var fade = setInterval(() => {
                if (opacity > 0) {
                    opacity -= 0.05;
                    mooncake.style.opacity = opacity;
                } else {
                    clearInterval(fade);
                    rabbit.style.visibility = 'visible';
                    if (document.body.clientWidth >= 500) mooncake.style.width = "500px";
                    mooncake.src = imgList[index];
                    opacity = 0;
                    var appear = setInterval(() => {
                        if (opacity < 1) {
                            opacity += 0.05;
                            mooncake.style.opacity = opacity;
                        } else {
                            clearInterval(appear);
                            isAnimating = false; // 允许下一次点击
                        }
                    }, 10);
                }
            }, 10);
        }
    }
};
