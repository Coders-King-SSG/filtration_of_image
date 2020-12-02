function preload() {
    //empty
}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(450, 250);
    video = createCapture(VIDEO);
    video.hide();
    tint_color="";
}

function draw() {
    image(video, 0, 0, 640, 400);
    tint(tint_color)
}

function apply() {
    tint_color = document.getElementById('colour').value;
}

function snap() {
    save('picture.png')
}