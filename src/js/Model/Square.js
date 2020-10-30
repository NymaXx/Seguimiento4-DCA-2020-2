class Square extends Figure{
    
    constructor(tam, value, posX, posY,vel){
        super(tam, value, posX, posY,vel);
        
    }


    paint(){
        fill(255);
        rect(this.posX,this.posY, this.tam, this.tam);
        fill(0);
        textSize(30);
        text(this.value, this.posX+10, this.posY+30);
    }

    move(){
    super.move();
    
    }

    duplicateTam(){
       super.duplicateTam();
    }
}