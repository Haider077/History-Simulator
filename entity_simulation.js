function simulate(boundX,boundY){
    for(let i =0; i < 10000; i++){
        x = random(0,boundX);
        y = random(0,boundY);

        colork = get(x,y);

        if(colork[0] == mosquito[0] && colork[1] == mosquito[1] && colork[2] == mosquito[2]){
            console.log("potaot")
            
            
            if(get(x+1,y)[0] != mosquito[0]){
                set(x+1,y,color(mosquito[0],mosquito[1],mosquito[2]));
            }
            if(get(x-1,y)[0] != mosquito[0]){
                set(x-1,y,color(mosquito[0],mosquito[1],mosquito[2]));
            }
            if(get(x,y+1)[0] != mosquito[0]){
                set(x,y+1,color(mosquito[0],mosquito[1],mosquito[2]));
            }
            if(get(x,y-1)[0] != mosquito[0]){
                set(x,y-1,color(mosquito[0],mosquito[1],mosquito[2]));
            }

        }

    }

}