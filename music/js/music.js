var music = document.querySelectorAll('.musicname');
var musicplayer = document.querySelector('.musicplayer');
var command = document.querySelector('#myCommand');
var commandarea = document.querySelector('.commands');
var btn = document.querySelector('.btn');
like = document.getElementsByClassName('like');//动态不能用querySelector
var num1 = document.querySelector('.commandNum');
//音乐
music[0].onclick = function () {
    musicplayer.src = './music/0.mp3';
    musicplayer.play();
}
music[1].onclick = function () {
    musicplayer.src = './music/1.mp3'
    musicplayer.play();
}
//切歌
var next=document.querySelector('.next');
num=0;
next.onclick=function(){

    if(num<1){
        num++;
    musicplayer.src = './music/'+num+'.mp3';
    musicplayer.play();}
    else
    num=0;
    musicplayer.src = './music/'+num+'.mp3';
    musicplayer.play();
}
//评论
btn.onclick = function () {
    var commands = document.createElement('div');
    commands.className = 'itm';
    commands.innerHTML = ` <div class="itm" id="com2">
    <div class="head"><img src="./images/default_avatar.jpg" alt=""></div>
    <div class=".cntwrap ">
        <div class="cnt" id="command2">
            <a href="javascript:(0)" class="username">宝批龙</a>
            `+ command.value + `
        </div>
        <div class="点赞">
            <div class="time">2020年11月4日
            </div>
            <span class="del">
                <span style="display: none;" class="j-delete-comment">
                    <a href="javascript:void(0)" class="s-fc3">删除</a>
                    <span class="sep">|</span>
                </span>
            </span>
            <a href="javascript:void(0)" class="reply">回复</a>
            <span class="sep">|</span>
            <a href="javascript:void(0)" class="like">
                </a>
        </div>
    </div>
</div>`

    commandarea.appendChild(commands);
    //点赞
    for (let index = 0; index < like.length; index++) {
        like[index].onclick = function () {
            if (getComputedStyle(this, null)['backgroundPosition'] == '-150px 0px')
                this.style.backgroundPosition = '-170px 0'
            else if (this.style.backgroundPosition == '-170px 0px') {
                this.style.backgroundPosition = '-150px 0'
            }
        }
    }
    num1.innerHTML=like.length;

}
//搜索栏
var ipt = document.querySelector('.searchipt');
var hid=document.querySelector('.hid')
ipt.oninput = function () {
  
        if (ipt.value == '只因') {
            hid.style.display='block'
        }
        else
        hid.style.display='none'
}