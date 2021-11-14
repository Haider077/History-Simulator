

let img;
function preload() {
  img = loadImage('maps/earth.jpg');
  img1 = loadImage('maps/empty.png');

}
let simObj = [];

function mouseDragged() {

  let colorK = img.get(mouseX, mouseY);
  
  if(!(getHSVValue(colorK).hue > 84 && getHSVValue(colorK).hue < 174)){


    set(mouseX, mouseY,color(85,100,175));
    let newObj = Object.create(ent_neanderthal);
    newObj.position.x = mouseX;
    newObj.position.y = mouseY;
    simObj.push(newObj);

  }

}
function setup()
{
  
  createCanvas(1920, 1080);
 
  pixelDensity(1);

  image(img,0,0);


  onmousemove = function(e){
    //let colorK = img.get(mouseX, mouseY);
    let colorC = get(mouseX,mouseY);
    
    

    updatePixels();
    //console.log("terrain : " + getClassifiedTerrain(getHSVValue(colorK)));
    console.log(getEntiityByRGBColor(getRGBValue(colorC)));
  }


  
  
}

function draw(){
  //simulate(1000,1000);
  for(let i = 0; i < simObj.length; i++){
    simulateEntity(simObj[0],color(85,100,175));
  }
  updatePixels();
}





























