class Screen{
  num;
  isAdd;
  isSubtract;
  
    constructor(num,){
        this.num=num;
        this.isAdd=false;
        this.isSubtract=false;
    }

paintNum(){
    fill(255);
    rect((width/4)+50, (height-70)/2, (width/4)+100,70);
    fill(0);
    text(this.num, 397, (height+25)/2);
}
paintButtonsScreen1(){
    fill(100);
    rect(20, (height-70)/2, width/4, 70);
    fill(255);
    text("Sumar", 63  , (height+25)/2);
    fill(255,100,100);
    rect((width*3/4)-20,(height-70)/2, width/4, 70);
    fill(255);
    text("Restar", 631  , (height+25)/2);

    if(this.num > 0){
        fill(100,140,240);
    rect((width/4)+50, 466, (width/4)+100,70);
        fill(0);
    text('Continuar', 335, 514);
    }
    }


paintButtonsScreen2(){
    fill(100);
    rect(0, 550, width/4, 70);
    fill(0);
    text("Anadir", 20, 600);
    fill(255,100,100);
    rect(width/4, 550, width/4,70);
    fill(0);
    text("Quitar", 220, 600);
    fill(100,255,100);
    rect(width*2/4, 550, width/4,70);
    fill(0);
    text("DuplicarTam", 410, 600);
    fill(100,100,255);
    rect(width*3/4, 550, width/4,70);
    fill(0);
    text("CrearCirculos", 610, 600);
}

addInOne(){
    if(this.num<10 && this.num >=0 && mouseX > 20 && mouseX< 219 && mouseY > 274 && mouseY < 345){
        this.num= this.num+=1;  
        
    }
}

subtractInOne(){
    if(this.num <=10 && this.num >0 && mouseX > 579 && mouseX< 779 && mouseY > 274 && mouseY < 345){
        this.num= this.num-=1;  
        
    }

}

addInTwo(){
    if(this.num<10 && this.num >=0 && mouseX > 0 && mouseX< width/4 && mouseY > 550 && mouseY < 620){
        this.num= this.num+=1;  
        if(mouseIsPressed){
            this.isAdd=true;
        }else{
            this.IsAdd=false;
        }
    }
}

subtractInTwo(){
    if(this.num <=10 && this.num >0 && mouseX > width/4 && mouseX< 400 && mouseY > 550 && mouseY < 620){
        this.num= this.num-=1;  
        if(mouseIsPressed){
            this.isSubtract=true;
        }else{
            this.isSubtract=false;
        }
    }

}





getNum(){
    return this.num;
}

getIsAdd(){
    return this.isAdd;
}

getIsSubtract(){
    return this.isSubtract;
}

}