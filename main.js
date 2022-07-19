noseX=0;
noseY=0;


function preload(){
    mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png")
    lipstick=loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")

}

function setup(){
    canvas=createCanvas(800,400);
    canvas.position(100,250);
    video=createCapture(VIDEO);
    video.position(100,250);
    video.hide();
    
    poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("posenet_is_loaded");
}

function gotPoses(results){
if(results.length > 0 ){
    console.log(results);
    console.log("nosex="+ results[0].pose.nose.x);
    console.log("nosey="+ results[0].pose.nose.y);
    mustacheX= results[0].pose.nose.x15;
   mustacheY=results[0].pose.nose.y10;
}
}
    
    

    tint_color="";


function draw(){
    image(video,100,50,600,300);
    image(mustache,mustacheX,mustacheY,30,30);

    tint(tint_color);
    fill(255,0,0);
    stroke(255,0,0);
        
    circle(40, 40, 60);
    circle(40, 350, 60);
    circle(750, 350, 60);
    circle(750, 40, 60);
    stroke('green');
    fill('green')
    rect(35, 70, 10, 250);
    rect(745, 70, 10, 250);  
    rect(70, 350,650, 10);
    rect(70, 35,650, 10);
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;

}

function take_snapshot(){
    save("image.png");
}