song1 = "";
song2 = "";

leftWrisY = "";
leftWristX = "";

rightWristY = "";
rightWristX = "";

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}

function setup() {
     canvas =  createCanvas(600, 500);
     canvas.center();
    
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded(){
    console.log("PoseNet is Intialized");
}

function play(){
    song1.play();
    song1.setVolume(1);
    song1.rate(1); 
    song2.play();
    song2.setVolume(1);
    song2.rate(1);
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results);
        leftX = results[0].pose.leftWrist.x;
        leftY = results[0].pose.leftWrist.y;
        console.log("left wrist X = " + leftX + " left wrist Y = " + leftY);

        rightX = results[0].pose.rightWrist.x;
        rightY = results[0].pose.rightWrist.y;
        console.log("right wrist X = " + rightX + " right wrist Y = " + rightY);

    }
}
