

let img;
function preload() {
  img = loadImage('maps/earth.jpg');
  img1 = loadImage('maps/empty.png');

}
function mouseDragged() {
  fill(color(255,0,255));
  text('*', mouseX, mouseY);
}
function setup()
{
  
  createCanvas(1920, 1080);
 
  pixelDensity(1);
  //set(0, 0, biologicalMap);
  image(img,0,0);
  //image(img1,0,0);
  
  
  
  
  

  onmousemove = function(e){
    let colorK = img.get(mouseX, mouseY);
    let colorC = get(mouseX,mouseY);
    
    updatePixels();
    console.log(getEntiityByColor(getRGBValue(colorC)));
  
  
  
  }
  updatePixels();
  
}

function draw(){
  
}





























