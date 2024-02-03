$(document).ready(function () {
    const outputDiv = $('#output');
    const promptDiv = $('#prompt');
    const asciiArtDiv = $('#ascii_art');

    const messages = [
        'Hello, welcome to my website!',
        'Feel free to explore and learn more about me.',
        'Type "help" for a list of commands.',
    ];

    let messageIndex = 0;

    function typeMessage() {
        if (messageIndex < messages.length) {
            const message = messages[messageIndex];
            outputDiv.append(message + '<br>');
            messageIndex++;
            setTimeout(typeMessage, 1000);
        } else {
            promptDiv.addClass('blink');
        }
    }

    typeMessage();

    // ASCII art waving animation
    const waveFrames = [
        '  \\o/',
        '   | ',
        '  / \\',
    ];

    let waveIndex = 0;

    function wave() {
        asciiArtDiv.text(waveFrames[waveIndex]);
        waveIndex = (waveIndex + 1) % waveFrames.length;
        setTimeout(wave, 500);
    }

    wave();
});