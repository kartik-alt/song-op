var song1="";
var song2="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
video=createCapture(VIDEO);
video.hide();
pn=ml5.poseNet(video,modelLoaded);
pn.on("pose",gotPoses);
}
function draw(){
image(video ,0,0,600,500);
}

function preload(){
    song1=loadSound("ridin.mp3");
    song2=loadSound("rise up.mp3");
}

function play(){
song1.play();
song2.play();

}

function modelLoaded(){
console.log("model has loaded")

}