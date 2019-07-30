export default function snow() {
    //获取屏幕宽高，控制在屏幕内
    var windowWidth = window.screen.width - 50;
    var windowHeight = window.screen.height - 100;

    //创建雪花
    function createSnow(){
        var left = 0;
        var top = 0;

        //定义一个初始化随机数,使雪花在屏幕中
        var left_random = Math.random() * windowWidth;
        var top_random = Math.random()* windowHeight;
        var div = document.createElement('div');
        div.className = 'snow';
        div.style.transform = 'scale('+(Math.random())+')'

        document.body.appendChild(div);

        //雪花飘落
        setInterval(function () {
            div.style.left = left_random + left +'px';
            div.style.top = top_random + top +'px'
            left += 0.4;
            top += 0.4;

            // div.style.transform = 'translate()'

            //如果雪花跑到屏幕外面了,让雪花重新返回屏幕顶部
            if(left_random + left >= windowWidth){
                left_random = Math.random();
                left = 0;
            }

            if(top_random + top >= windowHeight){
                top_random = Math.random();
                top = 0;
            }
        },10)

    }
    for(var i = 0 ; i < 30 ; i++){
        createSnow()
    }

}
