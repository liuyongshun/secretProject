var getBox = function(className){
    return document.querySelector("." + className)
}


var fistBoxController = (function(){
    var firstBox = getBox("firstBox");
    var liList = document.querySelectorAll(".menuBox li");
    var ul = document.querySelector(".tab-box");
    var controller = {
        muneController : function(){

            for(var i = 0; i < liList.length; i++){

                liList[i].addEventListener("touchstart",function(event,n){
                    return function(){
                        for(var j = 0; j < liList.length; j++){
                            liList[j].classList.remove("liactive");

                        }
                        this.classList.add("liactive");
                        ul.style.left = "-" + n * 100 + "%";
                    }

                }(event,i))
            }
        }(),
        contentCtroller : function(){
            var contentBox = document.querySelector(".contentBox");

            ul.style.left = "0%";

            var startX,disX;
            contentBox.addEventListener("touchstart",function(event){
                var touche = event.touches[0];
                startX = touche.clientX;

            })
            contentBox.addEventListener("touchend",function(event){
                var touche = event.changedTouches[0];
                disX = touche.clientX - startX;
                var leftNum = parseInt(ul.style.left);
                if(disX > 0 && disX > 100){
                        if(leftNum <= -100){
                            ul.style.left = leftNum + 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            menuController(left);
                        }
                }else if(disX < 0 && disX < -100){
                        if(leftNum >= 0){
                            ul.style.left = leftNum - 100 + "%";
                            var left = (~ parseInt(ul.style.left) + 1) / 100;
                            menuController(left);
                        }
                }
            })
            contentBox.addEventListener("touchmove",function(event){
                event.stopPropagation()
            });

            function menuController(order){
                for(var i = 0; i < liList.length; i++){
                    liList[i].classList.remove("liactive");
                }
                liList[order].classList.add("liactive");
            }
        }()
    }


}())

