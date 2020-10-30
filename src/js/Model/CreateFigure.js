class CreateFigure{

    figures = [];
    sc;
    constructor(){
    sc= new Screen(0);    
    }


    createArray(){
        for(let i=0; i < sc.getNum(); i++){
            this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
            if(sc.getIsSubtract()==true){
                this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
            }
            if(sc.getIsAdd()==true){
                this.figures.splice(-1,1);
                //this.figures.pop();
            }
        }
          
    }

    toNewArray(){
        for(let i=0; i < this.figures.length; i++){
            this.figures[i];
            if(sc.getIsAdd()==true){
                this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
            }
            if(sc.getIsSubtract()==true){
                this.figures.splice(-1,1);
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

    subtractTo(){
        for(let i=0; i < this.figures.length; i++){
            if(sc.getIsSubtract==true){
                this.figures.splice(-1,1);
            }
          
            
        }
    }

    duplicate(){
        for(let i=0; i < this.figures.length; i++){
        if(mouseX > 400 && mouseX <600 && mouseY > 550 && mouseY < 620){
            this.figures[i].duplicateTam();
        }
    }
    }


}