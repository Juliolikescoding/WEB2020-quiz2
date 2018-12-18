var lilAlien = document.querySelector(".alien");
var space = document.querySelector(".space");
var message= document.querySelector(".message");
var dance =[
    { backgroundPosition: "-145px 0px"},
    { backgroundPosition: "-193px 0px"},
    {backgroundPosition: "-241px 0px"},


];
var time = {
    duration:1000,
    iterations:Infinity,
    easing:"steps(2, end)"
};

window.onscroll= function (e){
    if(document.documentElement.scrollTop < 800){
        lilAlien.style.backgroundPosition = '-145px 0';
        message.innerHTML="LETS";
        console.log(space.scrollTop);
    }
    else if(document.documentElement.scrollTop < 1600){
        lilAlien.style.backgroundPosition = '-193px 0';
        message.innerHTML="PAR";
        console.log(space.scrollTop);
    }
    else if(document.documentElement.scrollTop < 3200){
        lilAlien.style.backgroundPosition= '-241px 0px';
        message.innerHTML="PARRR";
        console.log(space.scrollTop);
    }
    else if(document.documentElement.scrollTop < 4062) {
        lilAlien.style.backgroundPosition= '-145px 0px';
        message.innerHTML="PARRRTY";
        lilAlien.animate(dance, time);
        console.log(document.documentElement.scrollTop);

    }

}

