
function playVideo (){
    document.querySelectorAll('.food-plate-card').forEach(card => {
        if (!card) return; 

        var img = card.querySelector('img');
        var video = card.querySelector('video');

        if (!img || !video) return; 
       
        card.addEventListener('mouseenter',()=>{
              const playPromise = video.play();

            if (playPromise !== undefined) {
                playPromise.then(() => {
                    img.style.opacity = 0;
                    video.style.opacity = 1;
                }).catch(() => {});
            }
        })

        card.addEventListener('mouseleave', ()=>{
            video.pause();
            video.currentTime=0;
            video.style.opacity=0;
            img.style.opacity=1;
        })
    });
}


document.addEventListener('DOMContentLoaded', playVideo);