objects=[];
status="";


function setup() {
canvas=createCanvas(380,380);
canvas.center();
video=createCapture(VIDEO);
video.size(380,380);
video.hide();
}

function draw() {
    image(video,0,0,380,380);
    if (status!="") {
    objectDetector.detect(video,gotResult);
    for (i = 0; i < objects.length; i++) {
    document.getElementById("status").innerHTML="Status : Objects Detected";
    document.getElementById("number_of_objects").innerHTML="Number of Objects Detected Are : "+objects.length;
    
    fill("blue");
    percent=Math.floor(objects[i].confidence*100);
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("black");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
    }
    }
    }

function start() {
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status : Detecting Objects";
object_name=document.getElementById("object_name").value;
}

function modelLoaded() {
console.log("modelLoaded");
status=true;
}

function gotResult(error,results) {
if (error) {
console.log(error);
}
console.log(results);
objects=results;
}