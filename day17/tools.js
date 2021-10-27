
        //目前定时器的标识由全局变量timer保存
        //目前所有的正在执行的timer定时器都是保存到这个变量中
        var timer;
        //尝试创建一个可以执行简单动画的函数
        /*
            obj: 对象本身
            attr：改变的东西
            target：目标
            speed：速度
            callback: 传递回掉函数，将在动画执行完毕以后执行
        */
        function move(obj, attr, target, speed, callback){
            clearInterval(obj.timer);
            //如果从0向800移动，则speed为正
            //如果从800到0移动，则speed为负
            var current = parseInt(getComputedStyle(obj,null)[attr]);
            if(current >= target){
                speed*=-1;
            }
            //向执行动画的对象中添加一个timer属性，用来保存他自己的定时器的标识
            obj.timer = number = setInterval(() => {
                var originLeft = getComputedStyle(obj,null)[attr];
                var newValue = parseInt(originLeft,10) + speed;
                if( (speed > 0 && newValue >= target) || (speed < 0 && newValue <= 0) ){
                    newValue = target;
                }
                obj.style[attr] = newValue + "px";
                //当元素移动到800px时，使其停止执行动画
                if(newValue == target){
                    clearInterval(obj.timer)
                    if(callback){
                        callback();
                    }
                }
            }, 30);
        }