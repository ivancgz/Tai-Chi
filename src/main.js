let html = document.querySelector('#html');
let style = document.querySelector('#style');

let string = `/* 你好，我叫小陈
 * 接下来我来展示一下我的前端功底
 * 首先我要准备一个div
 **/
#div1{
    border: 1px solid red;
    width: 200px;
    height: 200px;
}
/* 接下来我把 div 变成一个八卦图
 * 首先把 div 变成一个圆
 **/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/* 八卦是阴阳形成的
 * 一黑一白
 **/
#div1{
    background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 加两个小球 */
#div1::before{
    width: 100px;
    height: 100px;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
    width: 100px;
    height: 100px;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 32%, rgba(255,255,255,1) 33%, rgba(255,255,255,1) 100%);
}
`;
let string2 = ''
let n = 0;

let step = () => {
    setTimeout(() => {
        // 如果是回车，就不照搬
        // 如果不是回车就照搬
        if(string[n] === '\n'){
            string2 += "<br>";
        } else if(string[n] === ' '){
            string2 += "&nbsp;";
        } else {
            string2 += string[n];
        }
        
        html.innerHTML = string2;
        style.innerHTML = string.substring(0,n);
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);

        if (n < string.length - 1){
            // 不是最后一个
            n += 1;
            step();
        } else {
            // n是最后一个，什么都不做
        }
    }, 50);
}

step();





























