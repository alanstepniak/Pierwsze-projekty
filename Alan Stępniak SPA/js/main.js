let logos = document.getElementsByClassName('logos');
let text = document.getElementsByClassName('text');

const description = () => {
    logos[0].setAttribute("style" , "flex-direction:column; align-items: flex-start; transition-duration:2s; animation:none" );

    for(var i = 0; i < text.length; i++){
        text[i].setAttribute("style", "display:block; animation: fadeInFromNone 2.5s ease-out;");
    }
}

logos[0].addEventListener("click",description);

