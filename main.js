function preload(){

}

function setup(){
canvas= createCanvas(740,485);
canvas.position(640,220);
video= createCapture(VIDEO);
video.hide();
tint_color= "";
}

function draw(){
    image(video,30,30,680,430);
    fill(255,0,0);
    stroke(255,0,0);
    circle(30,30,20);
    circle(30,460,20);
    circle(710,30,20);
    circle(710,460,20);
    fill(0,255,0);
    stroke(0,255,0);
    //up
    triangle(40,30,70,0,100,30);
    triangle(100,30,130,0,160,30);
    triangle(160,30,190,0,220,30);
    triangle(220,30,250,0,280,30);
    triangle(280,30,310,0,340,30);
    triangle(340,30,370,0,400,30);
    triangle(400,30,430,0,460,30);
    triangle(460,30,490,0,520,30);
    triangle(520,30,550,0,580,30);
    triangle(580,30,610,0,640,30);
    triangle(640,30,670,0,700,30);
    //down
    triangle(40,460,70,485,100,460);
    triangle(100,460,130,485,160,460);
    triangle(160,460,190,485,220,460);
    triangle(220,460,250,485,280,460);
    triangle(280,460,310,485,340,460);
    triangle(340,460,370,485,400,460);
    triangle(400,460,430,485,460,460);
    triangle(460,460,490,485,520,460);
    triangle(520,460,550,485,580,460);
    triangle(580,460,610,485,640,460);
    triangle(640,460,670,485,700,460);
    //left
    triangle(30,40,0,70,30,100);
    triangle(30,100,0,130,30,160);
    triangle(30,160,0,190,30,210);
    triangle(30,210,0,240,30,270);
    triangle(30,270,0,300,30,330);
    triangle(30,330,0,360,30,390);
    triangle(30,390,0,420,30,450);
    //right
    triangle(710,40,740,70,710,100);
    triangle(710,100,740,130,710,160);
    triangle(710,160,740,190,710,210);
    triangle(710,210,740,240,710,270);
    triangle(710,270,740,300,710,330);
    triangle(710,330,740,360,710,390);
    triangle(710,390,740,420,710,450);
}

function take_snapshot(){
    save("bdaypic.png");
}
