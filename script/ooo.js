/**
 * Created by TestSmirk on 2016/1/4.
 */
window.onload = function () {
    var box = document.getElementById("container");
    //���ͼƬNodeLIst���󼯺�
    var imgs = box.getElementsByTagName("img");
    //����ͼƬ�Ŀ��
    var imgWidth = imgs[0].offsetWidth;
    //����������ͽ¶�����
    var exposeWidth = 160;
    var boxWidth = imgWidth + (imgs.length - 1) * exposeWidth;
    box.style.width = boxWidth + "px";
    //����ÿ���ŵĳ�ʼλ��
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