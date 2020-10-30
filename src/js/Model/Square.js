class Square extends Figure{
    constructor(tam, value, posX, posY,vel){
        super(tam, value, posX, posY,vel);
    }


    paint(){
        fill(255);
        rect(this.posX,this.posY, this.tam, this.tam);
    }

    move(){
    super.move();
    
    }

    duplicateTam(){
       super.duplicateTam();
    }
}