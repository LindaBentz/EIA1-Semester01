var A07;
(function (A07) {
    /*Array*/
    var sound = ["assets/hihat.mp3", "assets/kick.mp3", "assets/snare.mp3", "assets/F.mp3", "assets/G.mp3",
        "assets/A.mp3", "assets/C.mp3", "assets/laugh-1.mp3", "assets/laugh-2.mp3"];
    /*Zentrale Funktion*/
    function playSample(audioFile) {
        var sound = new Audio(audioFile);
        sound.play();
    }
    /*Selbsterstellte Beat*/
    function playBeat() {
        setInterval(function () { playSample(sound[2]); }, 870);
        setInterval(function () { playSample(sound[1]); }, 540);
        setInterval(function () { playSample(sound[0]); }, 2000);
    }
    /*Eventlistener*/
    window.addEventListener("load", function () {
        document.getElementById("buttoneins").addEventListener("click", function () { playSample(sound[0]); });
        document.getElementById("buttonzwei").addEventListener("click", function () { playSample(sound[1]); });
        document.getElementById("buttondrei").addEventListener("click", function () { playSample(sound[2]); });
        document.getElementById("buttonvier").addEventListener("click", function () { playSample(sound[3]); });
        document.getElementById("buttonfünf").addEventListener("click", function () { playSample(sound[4]); });
        document.getElementById("buttonsechs").addEventListener("click", function () { playSample(sound[5]); });
        document.getElementById("buttonsieben").addEventListener("click", function () { playSample(sound[6]); });
        document.getElementById("buttonacht").addEventListener("click", function () { playSample(sound[7]); });
        document.getElementById("buttonneun").addEventListener("click", function () { playSample(sound[8]); });
        document.getElementById("playbutton").addEventListener("click", function () { playBeat(); });
    });
    /*Bonusaufgabe*/
    document.addEventListener('keydown', function (event) {
        if (event.key == "1") {
            playSample(sound[0]);
        }
        else if (event.key == "2") {
            playSample(sound[1]);
        }
        else if (event.key == "3") {
            playSample(sound[2]);
        }
        else if (event.key == "4") {
            playSample(sound[3]);
        }
        else if (event.key == "5") {
            playSample(sound[4]);
        }
        else if (event.key == "6") {
            playSample(sound[5]);
        }
        else if (event.key == "7") {
            playSample(sound[6]);
        }
        else if (event.key == "8") {
            playSample(sound[7]);
        }
        else if (event.key == "9") {
            playSample(sound[8]);
        }
        else if (event.key == "Enter") {
            playBeat();
        }
    });
})(A07 || (A07 = {}));
//# sourceMappingURL=script.js.map