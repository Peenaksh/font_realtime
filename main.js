function setup() {
    video = createCapture(VIDEO)
    video.size(550,500)
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on('pose',gotposes)

    canvas= createCanvas(550,500)
    canvas.position(560,150)
}
    function modelloaded() {
        console.log("Posenet is initialised")
    }

    function gotPoses(results) {
        if(results.length>0) {
            console.log(results);
        }
    }