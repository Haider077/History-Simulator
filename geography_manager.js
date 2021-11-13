const terrainTypes = {
    OCEAN : "ocean",
    GRASSLANDS : "grassLands",
    FORREST : "forrest",
    GLACIER : "glacier",
    DESERT: "desert"
}
/*This method will be useful to assign values and return to a particular terrain type. For instance we can say grasslands have a certain amount of crop yeild.
function getTerrainStatistics(terrain){
    let stats = {cropYield = "",}; 
    if(terrain == terrainTypes.GRASSLANDS){
        
    }


}
*/
function getHSVValue(color){

    let r = color[0] / 255;
    let b = color[1] / 255;
    let g = color[2] / 255;

    let cMax = Math.max(r,g,b);
    let cMin = Math.min(r,g,b);

    let delta = cMax - cMin;

    let hue;
    let saturation;
    let value;

    if(delta == 0){
        hue = 0;
    }
    if(cMax == r){
        hue = 60 * (((g - b) / delta)%6);
    }
    if(cMax == g){
        hue = 60 * (((b - r) / delta)+2);
    }
    if(cMax == b){
        hue = 60 * (((r - g)/ delta)+4);
    }
    
    if (cMax == 0){
        saturation = 0;
    }
    else{
        saturation = delta / cMax;
    }
    value = cMax;
    
    let hsv = {hue,saturation,value};
    console.log(hsv);
    return hsv;
}

function getClassifiedTerrain(hsv){

    let terrain;

    if(hsv.hue > 84 && hsv.hue < 170){
        terrain = terrainTypes.OCEAN;
    }
    if(hsv.hue > 191 && hsv.hue < 295){
        if(hsv.saturation < 0.5){
            terrain = terrainTypes.GRASSLANDS;
        }
        else{
            terrain = terrainTypes.FORREST;
        }

    }
    if(hsv.hue < 0 && hsv.hue > -59){
        terrain = terrainTypes.DESERT;
    }
    if(hsv.hue >= 295){
        terrain = terrainTypes.GRASSLANDS;
    }

    return terrain;

}
