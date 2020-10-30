let tam;
let value;
let posX;
let posY;
let vel;

class Figure{
    constructor(tam, value, posX, posY,vel){
        this.tam=tam;
        this.value=value;
        this.posX=posX;
        this.posY=posY;
        this.vel=vel;
}


paint(){
    
}

move(){
this.posX= (this.posX+=this.vel);
}

duplicateTam(){
    this.tam= this.tam*2;
}

getPosX(){
return this.posX;
}

getPosY(){
return this.posY;
}

getTam(){
return this.tam;
}

getValue(){
return this.value;
}

setValue(value){
    this.value=value;
}

setTam(tam){
    this.tam=tam;
}









}
