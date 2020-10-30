class Square extends Figure{
    
    constructor(tam, value, posX, posY,vel){
        super(tam, value, posX, posY,vel);
        
    }


    paint(){ //para evidenciar mejor el ordenamiento, se cambio la variable FILL para que tomara los valores en 
        //value, de esta manera entre mayor es el VALUE, mas clara es la figura y se podra apreciar mejor al ordenar
        fill(this.value *35);
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