var ipt=document.querySelectorAll('.text');
    var mes=document.querySelectorAll('.error');
    var img=document.querySelectorAll('.error_icon');
    var strong=document.querySelectorAll('.strong');
    var finish=document.querySelector('.btn');
ipt[0].onblur=function()
{
    if(this.value.length==11)
    {img[0].className='success_icon';
mes[0].className='success';
mes[0].innerText='手机号码格式正确';
}
else{
    img[0].className='error_icon';
mes[0].className='error';
mes[0].innerText='手机号码格式不正确';
}}
ipt[1].onblur=function()
{
    if(this.value=='1234')
    {img[1].className='success_icon';
mes[1].className='success';
mes[1].innerText='验证码正确';
}
else{
    img[1].className='error_icon';
mes[1].className='error';
mes[1].innerText='验证码不正确';
}
}
ipt[2].onblur=function()
{
    if(this.value.length>=6&&this.value.length<=11)
    {img[2].className='success_icon';
mes[2].className='success';
mes[2].innerText='密码长度正确';
}
else{
    img[2].className='error_icon';
mes[2].className='error';
mes[2].innerText='密码长度在6-11';
}
}
ipt[3].onblur=function()
{
    if(this.value===ipt[2].value&&this.value!='')
    {img[3].className='success_icon';
mes[3].className='success';
mes[3].innerHTML='密码相同';}
else{
    img[3].className='error_icon';
mes[3].className='error';
mes[3].innerText='密码不同';
}
}
//密码强度
ipt[2].onblur=function(){
    var val=this.value;
    var aLvTxt = ['', '低', '中', '高'];//定义提示消息的种类
            var lv = 0; //初始化提示消息为空
            if (val.match(/[a-z]/g)) { lv++; } //验证是否包含字母
            if (val.match(/[0-9]/g)) { lv++; }  // 验证是否包含数字
            if (val.match(/(.[^a-z0-9])/g)) { lv++; } //验证是否包含字母，数字，字符            
            if (lv > 3) { lv = 3; } 
            console.log(lv);
for (let index = 1; index <=lv; index++) {
    strong[index-1].style. visibility='visible'; 
}
for (let index = lv+1; index <=3; index++){
    strong[index-1].style. visibility='hidden'; 
}
}

//完成注册
