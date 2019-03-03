def pause():
    video = document.getElementById("myVideo")
    btn = document.getElementById("myBtn")
    if video.paused:
        video.play()
        btn.innerHTML = "Pause"
    else:
        video.pause()
        btn.innerHTML = "Play"
