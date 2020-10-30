let tam;
let value;
let posX;
let posY;
let vel;
let dir;
class Figure{
    constructor(tam, value, posX, posY,vel){
        this.tam=tam;
        this.value=value;
        this.posX=posX;
        this.posY=posY;
        this.vel=vel;
        this.dir =1;
}


paint(){

}

move(){
    if(this.posX > width-this.tam || this.posX < 0){
        this.dir= (this.dir*-1);
    }
this.posX= (this.posX+=this.vel*this.dir);
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

getVel(){
    return this.vel;
}

setValue(value){
    this.value=value;
}

setTam(tam){
    this.tam=tam;
}









}
