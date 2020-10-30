

let screen=0;
let sc;

function setup(){
    createCanvas(800, 620); 
    sc = new Screen(0);
}

function draw(){
    background(0);
  
   
     
     
     
    switch(screen){
        case 0:
            sc.paintButtonsScreen1();
            sc.paintNum();
            fill(255);
            textSize(32);
            text('X' + mouseX + 'Y' + mouseY, mouseX, mouseY);

            break;

        case 1:
            sc.paintButtonsScreen2();
            break;
    }

}    




function mouseClicked(){
    

    sc.add();
    sc.subtract();
    
    
    console.log('sirve');

}