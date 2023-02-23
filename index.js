for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        var key = this.innerHTML;
        makesound(key);
        animate(key);
    });
}
document.addEventListener("keydown",function(event){
    makesound(event.key);
    animate(event.key);;
})
function makesound(key)
{
    switch(key)
    {
        case 'w':   var audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;
        case 'a':   var audio = new Audio("sounds/kick-bass.mp3");
                    audio.play();
                    break;
        case 's':   var audio = new Audio("sounds/snare.mp3");
                    audio.play();
                    break;
        case 'd':   var audio = new Audio("sounds/tom-1.mp3");
                    audio.play();
                    break;
        case 'j':   var audio = new Audio("sounds/tom-2.mp3");
                    audio.play();
                    break;
        case 'k':   var audio = new Audio("sounds/tom-3.mp3");
                    audio.play();
                    break;
        case 'l':   var audio = new Audio("sounds/tom-4.mp3");
                    audio.play();
                    break;
    }
}
function animate(key)
{
    var active_btn = document.querySelector('.'+key);
    active_btn.classList.toggle("pressed");
    setTimeout(function()
    {
        active_btn.classList.toggle("pressed");
    },100);
}