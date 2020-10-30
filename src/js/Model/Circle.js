class Circle extends Figure{
    constructor(tam, value, posX, posY,vel){
        super(tam, value, posX, posY,vel);
    }


    paint(){
        fill(255);
        ellipse(this.posX,this.posY,this.tam, this.tam);
    }

    move(){
        super.move();
    }

    duplicateTam(){
        super.duplicateTam();
    }
}