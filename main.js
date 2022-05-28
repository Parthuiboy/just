let song;
noseX=0;
noseY=0;
eye_RightX=0;
eye_RightY=0;
eye_LeftX=0;
eye_LeftY=0;
muchhX=0;
muchhY=0;
lipstickX=0;
lipstickY=0;
goggle_eye_RightX=0;
goggle_eye_RightY=0;
goggle_eye_LeftX=0;
goggle_eye_LeftY=0;
style="";

function preload(){
    goggle_image = loadImage("https://i.postimg.cc/DyHdXbPM/122.png");
    lipstick_image = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png");
    muchh_image = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    nose_image = loadImage("https://i.postimg.cc/kgTsD3DH/giphy-gif-cid-6c09b952xvzr1l5wg3gu7skevlmouipwbrf1oe1wxph3uiza-rid-giphy.gif");
    eye_r_image = loadImage("https://i.postimg.cc/d1wM2Z81/Zombie-Eye-512.png");
    eye_l_image = loadImage("https://i.postimg.cc/d1wM2Z81/Zombie-Eye-512.png");
}

function setup(){
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    image(video, 0, 0, 500 , 500);
    fill(255, 0, 0, 0);
    stroke(255, 0, 0, 0);
    if(style == "zombie"){
        circle(noseX,noseY,20);
        image(nose_image, noseX-35, noseY+10, 70, 60);
        image(eye_r_image, eye_RightX-15, eye_RightY-15, 35, 35);
        image(eye_l_image, eye_LeftX-15, eye_LeftY-20, 35, 35);
    }
    if(style == "moustache"){
        circle(muchhX,muchhY,0);
        image(muchh_image, muchhX-25, muchhY-2, 50, 50);
    }
    if(style == "lipstick"){
        circle(lipstickX,lipstickY,0);
        image(lipstick_image, lipstickX-30, lipstickY+10, 60, 50);
    }
    if(style == "goggle"){
        circle(goggleX,goggleY,0);
        image(goggle_image, goggleX-70, goggleY-128, 200, 200);
    }

}

function take_snapshot(){
    save('my_Filter.png');
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(results){
 if (results.length > 0){
     console.log(results);
     console.log("nose x = " + results[0].pose.nose.x);
     console.log("nose y = " + results[0].pose.nose.y);
     console.log("eye_RightX =" + results[0].pose.rightEye.x);
     console.log("eye_RightY =" + results[0].pose.rightEye.y);
     console.log("eye_LeftX =" + results[0].pose.leftEye.x)
     console.log("eye_LeftY =" + results[0].pose.leftEye.y);
     console.log("muchh x = " + results[0].pose.nose.x);
     console.log("muchh y = " + results[0].pose.nose.y);
     console.log("lipstick x = " + results[0].pose.nose.x);
     console.log("lipstick y = " + results[0].pose.nose.y);
     console.log("goggle x = " + results[0].pose.nose.x);
     console.log("goggle y = " + results[0].pose.nose.y);
     console.log("goggle_eye_RightX =" + results[0].pose.rightEye.x);
     console.log("goggle_eye_RightX =" + results[0].pose.rightEye.y);
     console.log("goggle_eye_LeftX =" + results[0].pose.leftEye.x)
     console.log("goggle_eye_LeftX =" + results[0].pose.leftEye.y);
     goggleX = results[0].pose.nose.x;
     goggleY = results[0].pose.nose.y;
     lipstickX = results[0].pose.nose.x;
     lipstickY = results[0].pose.nose.y;
     muchhX = results[0].pose.nose.x;
     muchhY = results[0].pose.nose.y;
     noseY = results[0].pose.nose.y;
     noseX = results[0].pose.nose.x;
     eye_RightX = results[0].pose.rightEye.x;
     eye_RightY = results[0].pose.rightEye.y;
     eye_LeftX = results[0].pose.leftEye.x;
     eye_LeftY = results[0].pose.leftEye.y;
     goggle_eye_RightX = results[0].pose.rightEye.x;
     goggle_eye_RightY = results[0].pose.rightEye.y;
     goggle_eye_LeftX = results[0].pose.leftEye.x;
     goggle_eye_LeftY = results[0].pose.leftEye.y;
 }
}

function mouchh(){
    style="moustache";
}

function zombie(){
    style="zombie";
}

function lipstick(){
    style="lipstick";
}

function goggle(){
    style="goggle";
}
