

let terrain;


function preload() {
  terrain = loadImage('maps/earth.jpg');

}

let agents = [];
let locations = [];

function mouseClicked() {

  let colorK = terrain.get(mouseX, mouseY);
  console.log(agents);
  if(!(getHSVValue(colorK).hue > 84 && getHSVValue(colorK).hue < 174)){


    set(mouseX, mouseY,color(85,100,175));

    let newObj = new ent_neanderthal(mouseX,mouseY);

    agents.push(newObj);

  }

}

function setup()
{
  
  createCanvas(1920, 1080);
 
  pixelDensity(1);

  image(terrain,0,0);


  onmousemove = function(e){
    //let colorK = img.get(mouseX, mouseY);
    let colorC = get(mouseX,mouseY);
    
    

    updatePixels();
    //console.log("terrain : " + getClassifiedTerrain(getHSVValue(colorK)));
    //console.log(getEntiityByRGBColor(getRGBValue(colorC)));
  }


  
  
}

function draw(){
  
  
    
  simulateAgents()

  updatePixels();
}


function simulateAgents(){
  for(let time = 0; time < 10; time ++){
    for(let i = 0; i < agents.length; i++){
      
      agents[i].migrate();
      
    }
  }

}




























