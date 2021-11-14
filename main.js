

let img;
function preload() {
  img = loadImage('maps/earth.jpg');
  img1 = loadImage('maps/empty.png');

}
function mouseDragged() {

  let colorK = img.get(mouseX, mouseY);
  
  if(!(getHSVValue(colorK).hue > 84 && getHSVValue(colorK).hue < 174)){

    //fill(color(255,0,255));
    set(mouseX, mouseY,color(255,0,255));

  }

}
function setup()
{
  
  createCanvas(1920, 1080);
 
  pixelDensity(1);

  image(img,0,0);

  
  onmousemove = function(e){
    let colorK = img.get(mouseX, mouseY);
    let colorC = get(mouseX,mouseY);
    
    updatePixels();
    console.log("terrain : " + getClassifiedTerrain(getHSVValue(colorK)));
    console.log("entity : " + getEntiityByColor(getRGBValue(colorC)));
  }


  updatePixels();
  
}

function draw(){
  
}





























