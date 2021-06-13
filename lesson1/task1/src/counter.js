var myTimer;

function clock() {
    myTimer = setInterval(myClock, 1000);
    var c = +document.getElementById("in").value;

    function myClock() {
        document.getElementById("demo").innerHTML = --c;
        if (c == 10) {
            var sound = new Howl({
                src: ['./src/sounds.mp3'],
            });
            sound.play();
        } else if (c === 0) {
            clearInterval(myTimer);
            alert("Reached zero");
        }
    }
}