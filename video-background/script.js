const video = document.querySelector(".video-bg");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
    if(video.paused){
        video.play();
        btn.textContent = "Pausar";
    }else{
        video.pause();
        btn.textContent = "Reproducir";
    }
});