

function simulateEntity(entity,color){

    let dispx = random(-1,1);
    let dispy = random(-1,1);

    get(entity.position.x,entity.position.y);

    if(getClassifiedTerrain(getHSVValue(terrain.get(entity.position.x + dispx,entity.position.y + dispy))) != terrainTypes.OCEAN){
        set(entity.position.x + dispx,entity.position.y + dispy,color);
        entity.position.x += dispx;
        entity.position.y += dispy;
    }
    else{
       // entity.position.x = entity.startingPos.x;
       // entity.position.y = entity.startingPos.y;
        //set(entity.position.x + dispx,entity.position.y + dispy,color);
    }

}

function getEntiityByRGBColor(color){

    let ent;

    if(compareRGBColors(color,neanderthal_color)){
        ent = ent_neanderthal;
    }

    return ent;

}