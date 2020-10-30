

let screen;
let sc;
let create;

function setup(){
    createCanvas(800, 620); 
    sc = new Screen(0);
    create= new CreateFigure();
    screen=0;
    
}

function draw(){
    background(0);
  
    fill(255);
    textSize(32);
    text('X' + mouseX + 'Y' + mouseY, mouseX, mouseY);
     
     
     
    switch(screen){
        case 0:
            sc.paintButtonsScreen1();
            sc.paintNum();
           

            break;

        case 1:
            sc.paintButtonsScreen2();
            create.paintArray();
            create.toNewArray();
           
            break;
    }

}    




function mouseClicked(){
    switch(screen){
        case 0:
            sc.addInOne();
            sc.subtractInOne();

         if(sc.getNum() <=10 && sc.getNum() >0 && mouseX > 249 && mouseX< 550 && mouseY > 466 && mouseY < 535){
            screen=1;
            create.createArray();
            
       
    }
            break;

        case 1:
            sc.addInTwo();
            sc.subtractInTwo();
            
            console.log(sc.getNum());
            create.duplicate();

            /*si se USA este metodo aqui, se crean nuevos arreglos con mas o menos elementos segun lo indicado
            por los botones, tambien se ordenan (ver console log) sin embargo no es el mismo arreglo anadiendo
            y quitando elementos, se crean nuevos arreglos
            |
            |
            V    */
           // create.createArray(); 
           
            
            
            
            break;
    }
    
    

}

function keyPressed(){
    if(keyCode===78){
        create.sortByValue();
     }
}
