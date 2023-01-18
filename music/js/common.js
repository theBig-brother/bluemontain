//搜索栏
var ipt = document.querySelector('.searchipt');
var hid = document.querySelector('.hid')
ipt.oninput = function () {

    if (ipt.value == '只因') {
        hid.style.display = 'block'
    }
    else
        hid.style.display = 'none'
}
//底部红色部分
var logo1 = document.querySelector('.logo1');
var logo2 = document.querySelector('.logo2');
var logo3 = document.querySelector('.logo3');
var logo4 = document.querySelector('.logo4');
var logo5 = document.querySelector('.logo5');
var logo6 = document.querySelector('.logo6');
var logo7 = document.querySelector('.logo7');
logo1.onmouseenter = function () {
    logo1.style.backgroundPosition = '-5px -115px';
}
logo1.onmouseleave = function () {
    logo1.style.backgroundPosition = '-170px -5px';
}
logo2.onmouseenter = function () {
    logo2.style.backgroundPosition = '-60px -170px';
}
logo2.onmouseleave = function () {
    logo2.style.backgroundPosition = '-5px -170px';
}
logo3.onmouseenter = function () {
    logo3.style.backgroundPosition = '-60px -5px';
}
logo3.onmouseleave = function () {
    logo3.style.backgroundPosition = '-5px -60px';
}
logo4.onmouseenter = function () {
    logo4.style.backgroundPosition = '-115px -5px';
}
logo4.onmouseleave = function () {
    logo4.style.backgroundPosition = '-60px -60px';
}
logo5.onmouseenter = function () {
    logo5.style.backgroundPosition = '-5px -5px';
}
logo5.onmouseleave = function () {
    logo5.style.backgroundPosition = '-115px -115px';
}
logo6.onmouseenter = function () {
    logo6.style.backgroundPosition = '-60px -115px';
}
logo6.onmouseleave = function () {
    logo6.style.backgroundPosition = '-170px -115px';
}
logo7.onmouseenter = function () {
    logo7.style.backgroundPosition = '-115px -60px';
}
logo7.onmouseleave = function () {
    logo7.style.backgroundPosition = '-170px -60px';
}
//假装登录
var up=document.querySelector('.signup')
var jia=document.querySelector('.jia');
var headimg=document.querySelector('.headimg') 
var headspan=document.querySelector('.headspan')
jia.onclick=function(){
    headimg.style.display='block';
    headspan.style.display='block';
    jia.style.display='none';
    up.style.display='none';
}