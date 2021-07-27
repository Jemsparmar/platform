
var platform1;
var platform2;
var countDistanceX=0;
var gap;
function preload()
{}

function setup() {
  createCanvas(9000, 668);
  // platform1=new Platform(100);
  // platform2=new Platform(500);

for(var i=0;i<6;i++){
platform1=new Platform(countDistanceX);
gap=random([0,0,0,100])
countDistanceX=countDistanceX+platform1.rw+gap;
}


}

function draw() {
  background('skyblue'); 
 drawSprites();
}

