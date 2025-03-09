var count = 0;

function score() {
    var score = document.getElementById("score");
    count += 1;
    score.innerHTML = count;
    if (count == 100){
        count=0
    }

}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function stop() {
    sound();
    var y = document.getElementById("y");
    var s = document.getElementById("s");
    y.style.display = "none";
    s.style.display = "none";
    var title = document.getElementById("title");
    title.innerHTML = "NICE CATCH!";
    title.style.marginLeft = "37%";
    title.style.cursor = "none";

    var image = document.getElementById("image");
    image.style.animation = "none";
    image.style.width = "20%";
    await sleep(2000);
    y.style.display = "inline";
    s.style.display = "inline";
    title.innerHTML = "CATCH THE PEDOPHILE";
    title.style.marginLeft = "22%";

    image.style.width = "10%";
    image.style.animation = "";
    image.style.animation = "chaker 2s infinite";


}
function sound() {
    const audio = document.getElementById('audio');
    audio.play();
}



document.addEventListener('keydown', function(event) {
    if (event.key === 'C' || event.key === 'c') {
        score();
        sound();
    }}
)