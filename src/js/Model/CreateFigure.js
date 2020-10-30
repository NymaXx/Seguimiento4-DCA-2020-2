class CreateFigure{

    figures = [];
    sc;
    constructor(){
    sc= new Screen(0);    
    }


    createArray(){
        for(let i=0; i < sc.getNum(); i++){
            this.figures.push(new Square(40,Math.floor(random(1,10)), 30*i+30, Math.floor(random(45,150)), 5));
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


}