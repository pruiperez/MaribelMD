window.addEventListener('DOMContentLoaded', (event) => {
    const playButton = document.getElementById('playButton');
    const audioPlayer = document.getElementById('audioPlayer');
    const progressBar = document.getElementById('progressBar');

    playButton.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.src = 'pause-icon.png'; // Cambia a icono de pausa
        } else {
            audioPlayer.pause();
            playButton.src = 'play-icon.png'; // Cambia a icono de reproducción
        }
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
        progressBar.style.width = percentage + '%';
    });
});
