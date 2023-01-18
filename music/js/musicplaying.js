var open1=document.querySelector('#flag_ctrl');
var more=document.querySelector('.f-hide');
var tri=document.querySelector('#tri');
open1.onclick=function(){
    if(more.style.display!='block'){
    more.style.display='block';
    this.innerHTML=`收起<i
    class="u-icn u-icn-70" id='tri'></i>`
}
else
{more.style.display='none';
this.innerHTML=`展开<i
class="u-icn u-icn-69" id='tri'></i>`
}
}
//评论
var num1 = document.querySelector('.commandNum');
var command = document.querySelector('#myCommand');
var commandarea = document.querySelector('.commands');
var btn = document.querySelector('.btn');
like = document.getElementsByClassName('like');//动态不能用querySelector
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