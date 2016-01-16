/**
 * Created by TestSmirk on 2016/1/4.
 */
window.onload = function () {
    var box = document.getElementById("container");
    //活的图片NodeLIst对象集合
    var imgs = box.getElementsByTagName("img");
    //单张图片的宽度
    var imgWidth = imgs[0].offsetWidth;
    //设置隐藏门徒露出宽度
    var exposeWidth = 160;
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
    box.style.width = boxWidth + "px";
    //设置每道门的初始位置
    function setImgPosition() {
        for (var i = 1, len = imgs.length; i < len; i++) {
            imgs[i].style.left = imgWidth + exposeWidth * (i - 1) + "px";
        }
    }

    setImgPosition();
    var translate = imgWidth - exposeWidth;
    for (var i = 0; i < imgs.length; i++) {
        var obj = imgs[i];
        (function (i) {
            imgs[i].onmouseover = function () {
                setImgPosition();
                for (var j = 1; j < i; j++) {
                    var obj1 = exposeWidth[j];
                    imgs[j].style.left = parseInt(imgs[j].style.left, 10) - translate + "px";
                }
            }
        })(i)
    }

}