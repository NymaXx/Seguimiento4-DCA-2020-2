class Screen{
  num;
    constructor(num){
        this.num=num;
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
    }


paintButtonsScreen2(){
    fill(100);
    rect(0, 550, width/4, 70);
    fill(255,100,100);
    rect(width/4, 550, width/4,70);
    fill(100,255,100);
    rect(width*2/4, 550, width/4,70);
    fill(100,100,255);
    rect(width*3/4, 550, width/4,70);
}

add(){
    if(this.num<10 && this.num >=0 && mouseX > 20 && mouseX< 219 && mouseY > 274 && mouseY < 345){
        this.num= this.num+=1;  
    }
}

subtract(){
    if(this.num <=10 && this.num >0 && mouseX > 579 && mouseX< 779 && mouseY > 274 && mouseY < 345){
        this.num= this.num-=1;  
    }

}

}