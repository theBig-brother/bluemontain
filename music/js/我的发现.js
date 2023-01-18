//轮播图
var picture = document.querySelector('.manyImg');


//轮播图
var i=0;
var left=document.querySelector('.left');
var right=document.querySelector('.right');
setInterval(() => {
    if(i<-2100)
    {
        i=0;
    }
    else
    i -= 730;
            picture.style.backgroundPosition = i + 'px 0';
}, 5000);
left.onclick=function(){
    i -= 730;
    picture.style.backgroundPosition = i + 'px 0';
}
right.onclick=function(){
    i += 730;
    picture.style.backgroundPosition = i + 'px 0';
}
//登录