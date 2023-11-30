

function preload(){
}

function setup()
{
    canvas = createCanvas(320,240);
    canvas.position(485,250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw()
{
    image(video, 0, 0, 320, 240)
}
