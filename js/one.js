function showSubMenu(li){
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "block";
}

function hideSubMenu(li){
    var subMenu = li.getElementsByTagName("ul")[0];
    subMenu.style.display = "none";
}

window.onload=function(){
    var list=document.getElementById('list');
    var prev=document.getElementById('prev');
    var next=document.getElementById('next');

    function animate(offset){
        var newleft=parseInt(list.style.left)+offset;
        if(newleft<-3000){
            list.style.left= -600+'px';
        }else if(newleft>-600){
            list.style.left= -3000+'px';
        }else{
            list.style.left=newleft+'px';
        }
    }
    prev.onclick=function(){
        animate(600);
    }

    next.onclick=function(){
        animate(-600)
    }

    var timer;
    function play(){
        timer=setInterval(function(){
            next.onclick()
        },1500)
    }

    play();

    var container=document.getElementById('container');
    function stop(){
        clearInterval(timer);
    }

    container.onmouseover=stop;
    container.onmouseout=play;

    var buttons=document.getElementById('buttons').getElementsByTagName('span');
    var index=1;
    function buttonsShow(){
        for(var i=0;i<buttons.length;i++){
            if(buttons[i].className=='on'){
                buttons[i].className='';
            }
        }
        buttons[index-1].className='on';
    }


    prev.onclick=function(){
        index-=1;
        if(index<1){
            index=5;
        }
        buttonsShow();
        animate(600);
    }
    next.onclick=function(){
        index+=1;
        if(index>5){
            index=1;
        }
        buttonsShow();
        animate(-600);
    }

    for(var i=0;i<buttons.length;i++){
        (function(i){
            buttons[i].onclick=function(){
                var clickIndex=parseInt(this.getAttribute('index'));
                var offset=600*(index-clickIndex);
                animate(offset);
                index=clickIndex;
                buttonsShow();
            }
        })(i)
    }

}
