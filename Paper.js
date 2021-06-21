 class Paper {
     constructor(x,y,r) {
         var options = {
             isStatic:false,
             'restituition':0.3,
             'friction':0,
             'density':3
         }
         
         this.x = x;
         this.y = y;
         this.r = r;
         this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
         this.image = loadImage("paper.png");
         World.add(world, this.body);
     }
     display() {
    var paperpos = this.body.position;
    push();
    translate(paperpos.x, paperpos.y);
    //rotate(angle);
    imageMode(CENTER);
    image(this.image,20,20,this.r, this.r);
    pop();
     }
 }