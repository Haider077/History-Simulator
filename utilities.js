
function createRGBColor(r,g,b){
    let rgb = [r,g,b];
    return rgb;
}

function getRGBValue(color){
    let rgb = [color[0],color[1],color[2]];
    return rgb;
}

function compareRGBColors(a,b){

    if(a[0] == b[0] && a[1] == b[1] && a[2] == b[2]){
        return true;
    }

}

function getRandomColor(){
    return {r:random(0,255),g:random(0,255),b:random(0,255)};
}
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

    return hsv;
}
