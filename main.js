song = "";
end_of_time = "";
let_it_go = "";
peter_pan = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    end_of_time = loadSound("end.mp3");
    let_it_go = loadSound("let.mp3");
    peter_pan = loadSound("peter.mp3");
}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    PoseNet = ml5.poseNet(VIDEO, modelLoaded)
    PoseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play1() {
    song = document.getElementById("name").value;
    song.rate(1);
    song.setVolume(1);

    if (song == "end_of_time") {
        end_of_time.play();
        let_it_go.stop();
        peter_pan.stop();
    }

    else if (song == "let_it_go") {
        end_of_time.stop();
        let_it_go.play();
        peter_pan.stop();
    }

    else if (song == "peter_pan") {
        end_of_time.stop();
        let_it_go.stop();
        peter_pan.play();
    }
}

function stop1() {
    end_of_time.stop();
    let_it_go.stop();
    peter_pan.stop();
}

function pause1() {
    if (song == "end_of_time") {
        end_of_time.pause();
        let_it_go.stop();
        peter_pan.stop();
    }

    else if (song == "let_it_go") {
        end_of_time.stop();
        let_it_go.pause();
        peter_pan.stop();
    }

    else if (song == "peter_pan") {
        end_of_time.stop();
        let_it_go.stop();
        peter_pan.pause();
    }
}

function modelLoaded() {
    console.log("Model Loaded!")
}

function gotPoses(result, error) {
    if (error) {
        console.error(error)
    }

    else if(result.length > 0){
        console.log(result);
        leftWristX = result[0].pose.leftWrist.x;
        leftWristY = result[0].pose.leftWrist.y;
        rightWristX = result[0].pose.leftWrist.x;
        rightWristY = result[0].pose.leftWrist.y;
        console.log("The Left Wrist X is " + leftWristX + " and the Y is " + leftWristY + ".");
        console.log("The Right Wrist X is " + rightWristX + " and the Y is " + rightWristY + ".");
        
    }
}