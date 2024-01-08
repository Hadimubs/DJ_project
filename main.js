LeftWristS=0;
RightWristS=0;
music1="";
music2="";
RightWristX=0;
LeftWristX=0;
RightWristY=0;
LeftWristY=0;
s1Status="";
s2Status="";
function setup(){
canvas=createCanvas(600,500);
canvas.center();
g=createCapture(VIDEO);
g.hide();
p=ml5.poseNet(g,PoseNetIsActive);
p.on('pose',GotPoses);
}

function PoseNetIsActive(){
console.log("PoseNet Is Initialized");
}

function GotPoses(result){
if (result.length>0) {
    console.log(result);


LeftWristS=result[0].pose.keypoints[9].score;
RightWristS=result[0].pose.keypoints[10].score;

RightWristX=result[0].pose.rightWrist.x;
LeftWristX=result[0].pose.leftWrist.x;
RightWristY=result[0].pose.rightWrist.y;
LeftWristY=result[0].pose.leftWrist.y;
console.log("Right Wrist X is  -  "+RightWristX);
console.log("Left Wrist X is  -  "+LeftWristX);
console.log("Right Wrist Y is  -  "+RightWristY);
console.log("Left Wrist Y is  -  "+LeftWristY);
}}

function draw(){
image(g,0,0,600,500);
s1Status=music1.isPlaying();
s2Status=music2.isPlaying();
fill("red");
stroke("white");

if (RightWristS>0.2) {
circle(RightWristX,RightWristY,20);
music1.stop();
if (s1Status == false) {
   music2.play(); 

   document.getElementById("sName").innerHTML="Song Name Is Harry Potter Theme Song";

}
}

if (LeftWristS>0.2) {
    circle(LeftWristX,LeftWristY,20);
    music2.stop();
    if (s1Status == false) {
       music1.play(); 
    
       document.getElementById("sName").innerHTML="Song Name Is Peter Pan Theme Song";
       
    }
    }
}

function preload(){
music1=loadSound("music.mp3");
music2=loadSound("music2.mp3");
}