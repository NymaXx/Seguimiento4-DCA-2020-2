class CreateFigure{

    figures = [];
    figures2= [];
    sc;
    constructor(){
    sc= new Screen(0);  
    
    }


    createArray(){ //De acuerdo a la posicion en el array se ubican los elementos en el lienzo, siendo asi
        //el elemento que esta mas a la izquierda al inicio del movimiento es el primer elemento, y asi
        //sucesivamente
        for(let i=0; i < sc.getNum(); i++){
            this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
       
    }
}

    toNewArray(){ //para anadir y eliminar elementos del ARRAY
        for(let i=0; i < this.figures.length; i++){
           
            if(sc.getIsAdd()==true){
                this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
                this.figures[i].paint();
                this.figures[i].move();
            }
            if(sc.getIsSubtract()==true){
                this.figures.splice(-1,1);
                this.figures[i].paint();
                this.figures[i].move();
                
                //this.figures.pop();
               
            }
            
        } 
        
    }
    
    paintArray(){
        for(let i=0; i < this.figures.length; i++){
            this.figures[i].paint();
            this.figures[i].move();
        }
    }


    sortByValue(){  /*el ordenamiento funciona pero no parece ser muy evidente ya que los cuadrados estan en
        constante movimiento. Es mas notable al duplicar el tamano de los elementos y permitir
        que estos se superpongan. Se puede notar que el elemento con menor VALUE se situa detras 
        de los otros (como si se hubiera pintado primero) y asi sucesivamente*/
        for(let i=0; i < this.figures.length; i++){
            this.figures.sort(function(a,b){
                return a.getValue() - b.getValue();
              });
              console.log(this.figures[i]);  //console log que evidencia el ordenamiento
        
    }
}


    createCircles(){ //intento de creacion de circulos mediante los datos del arreglo de cuadrados

        
            for(let i=0; i < this.figures.length; i++){
                this.figures2.push(new Circle(this.figures[i].getTam(),this.figures[i].getValue(), this.figures[i].getPosX(), this.figures[i].getPosY() + 200, this.figures[i].getVel()));
        }

        /*let circles = this.figures.map(functionX(){
            for(let i=0; i < this.figures2.length; i++){
                this.figures2[i].paint();
                this.figures2[i].move();
            }
        }
        */
    
}

    paintCircles(){
             for(let i=0; i < this.figures2.length; i++){
            this.figures2[i].paint();
            this.figures2[i].move();
            
        }
        console.log("entra");
    }
     



//No pude duplicar el tamano de los objetos utilizando un for Each. Se usO un for normal
    duplicate(){  
        for(let i=0; i < this.figures.length; i++){
        if(mouseX > 400 && mouseX <600 && mouseY > 550 && mouseY < 620){
            this.figures[i].duplicateTam();
        }
    }
    
 //   this.figures.forEach(this.toForEach); //INTENTO DE FOR EACH

   
}

toForEach(item){
     item = this.figures[this].getTam();
        item*=2;
        console.log(item);
}



}