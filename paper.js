class paper
{
	constructor(x,y,w,h)
	{
        var options={
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
     this.x=x;
     this.y=y;
     this.w=w;
     this.h=h;
     this.image=loadImage("paper.png");
     this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    }
    display()
	{
			
			var groundPos=this.body.position;		
            this.body.position.x = mouseX;
            this.body.position.y = mouseY;
			push()
			translate(groundPos.x, groundPos.y);
			imageMode(CENTER)
			//strokeWeight(4);
			fill(128,128,128)
			image(this.image,0,0,this.w, this.h);
			pop()
			
	}

}