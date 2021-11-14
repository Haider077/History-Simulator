
//const ent_neanderthal = {name:"neanderthal",color:{r:255,g:178,b:102},population:"100",position:{x:250,y:250},startingPos:{x:250,y:250}};
const neanderthal_color = createRGBColor(85,100,175);

/*class ent_neanderthal{
    constructor(id,color,population,position,startingPos){
        this.id = id;
        this.color = color;
        this.population = population;
        this.position = position;
        this.startingPos = position;
    }
}*/

class ent_neanderthal {
    constructor(posX,posY) {
        this.name = "neanderthal";
        this.color = {r:255,g:178,b:102};
        this.population = 100;
        this.position = {x:0,y:0};
        this.position.x = posX;
        this.position.y = posY;
    }

    migrate() {
        let dispx = random(-1,1);
        let dispy = random(-1,1);


        let localCol = get(this.position.x,this.position.y);
        let col = {r:localCol[0],g:localCol[1],b:localCol[2]};

        if(getClassifiedTerrain(getHSVValue(terrain.get(this.position.x + dispx,this.position.y + dispy))) != terrainTypes.OCEAN){
            //walkthorugh villages
           //if(!compareRGBColors(col,locationColors.villageColor)){
                set(this.position.x + dispx,this.position.y + dispy,color(this.color.r,this.color.g,this.color.b));
            //}
            this.position.x += dispx;
            this.position.y += dispy;
        }
        if(random(0,100.0) > 99){

            this.settle();
            this.split();
            
        }


    }

    split(){
        if(agents.length < MAX_MIGRATING_ENTITIES){
            let child = new ent_neanderthal(this.position.x,this.position.y);
            agents.push(child);
        }
    }

    settle(){
        let village = new inf_settlement(this.name,this.position.x,this.position.y);
        Build(village,this.position.x,this.position.y);
        locations.push(village);
    }

    
}
//POLTIES
class polity{
    constructor(){

    }
}
class polity_agent{
    constructor(owner,posX,posY) {

    }

    defend(){

    }
    attack(){

    }
    patrol(){

    }
}
//INFASTRUCTURE
const locationColors = {
    villageColor : {r:255,g:255,b:255}
}
function Build(infastructure,posX,posY){
    set(posX,posY,color(infastructure.color.r,infastructure.color.g,infastructure.color.b));
}
class inf_settlement{

    constructor(race,posX,posY) {
        this.race = race;
        this.population = 100;
        this.color = {r:255,g:255,b:255};
        this.position = {x:0,y:0};
        this.position.x = posX;
        this.position.y = posY;
    }

}