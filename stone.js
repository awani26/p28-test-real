class Stone
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
       // this.image = loadImage("stone.png");
	}
	display()
	{
			
			var stonePos=this.body.position;		

			push();
			translate(stonePos.x, stonePos.y);
			rectMode(CENTER);
			//strokeWeight(4);
			fill(128,128,128);
			rect(0,0,this.w, this.h);
			pop();
			
	}

}