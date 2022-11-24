leftWrist_x = 0
rightWrist_x = 0
difference = 0
function setup() {
    video = createCapture(VIDEO)
    video.size(550,500)
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotPoses)

    canvas= createCanvas(550,500)
    canvas.position(560,150)
}
    function modelloaded() {
        console.log("Posenet is initialised")
    }

    function draw() {
        background("#78fa32");
        textSize(difference);
        fill("#071026")
        text('WEBAPP',100,200)
    }
    function gotPoses(results) {
        if(results.length>0) {
            console.log(results);
            leftWrist_x = results[0].pose.leftWrist.x
            rightWrist_x = results[0].pose.rightWrist.x
            difference = floor(leftWrist_x - rightWrist_x)
            console.log("the left wrsit x = " + leftWrist_x + "the right wrist x = " + rightWrist_x)
            
        }
    }