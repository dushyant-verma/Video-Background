document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('bg-video');
    const playPauseBtn = document.createElement('button');
    playPauseBtn.textContent = 'Pause Video';

    document.body.appendChild(playPauseBtn);


    playPauseBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause Video';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play Video';
        }
    });
});