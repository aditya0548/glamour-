document.addEventListener('DOMContentLoaded', () => {
    // --- Background Audio Setup (Howler.js) ---
    // Using a royalty-free ambient cinematic track URL as placeholder
    const bgMusic = new Howl({
        src: ['https://cdn.pixabay.com/download/audio/2022/01/18/audio_d0a13f69d2.mp3?filename=cinematic-time-lapse-115672.mp3'], // Placeholder ambient track
        loop: true,
        volume: 0.2, // Low volume
        html5: true // Force HTML5 audio to allow streaming and bypass some autoplay restrictions
    });

    let isPlaying = false;

    const audioToggleBtn = document.getElementById('audio-toggle');
    const mobileAudioToggleBtn = document.getElementById('mobile-audio-toggle');

    function toggleAudio() {
        if (isPlaying) {
            bgMusic.pause();
            isPlaying = false;
            updateButtonText('Audio: Off');
        } else {
            bgMusic.play();
            isPlaying = true;
            updateButtonText('Audio: On');
        }
    }

    function updateButtonText(text) {
        if(audioToggleBtn) audioToggleBtn.innerText = text;
        if(mobileAudioToggleBtn) mobileAudioToggleBtn.innerText = text;
    }

    if (audioToggleBtn) {
        audioToggleBtn.addEventListener('click', toggleAudio);
    }

    if (mobileAudioToggleBtn) {
        mobileAudioToggleBtn.addEventListener('click', toggleAudio);
    }

    // Note: Autoplay without interaction is usually blocked by browsers.
    // We rely on the user clicking the Audio toggle to start it.
});
