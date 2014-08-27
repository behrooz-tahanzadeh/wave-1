function Dot(x,y)
{
	this.x = x;
	this.y = y;
	
	this.v = 0;
	this.a = 0;
	this.r = 0;
	
	Dot.List.push(this);
}//eoc



//static members
Dot.List = [];
Dot.Radius = 5;

Dot.MoveAll = function()
{
	for (var i = 0; i <Dot.List.length; i++)
		Dot.List[i].move();
};



Dot.InitAll = function()
{
	for(var i=0; i<80; ++i)
		for(var j=0; j<60; ++j)
			new Dot(i*10, j*10);
};




Dot.prototype.move = function()
{
	//if(this.a==0 && this.v==0 && this.r==0) return;
	
	this.v+=this.a;
	this.r+=this.v;
	
	if(this.r>0)
	{
		this.a = -0.01;
		
		var s=Math.sin(this.r)*Dot.Radius;
		var c=Math.cos(this.r)*Dot.Radius;
		
		Main.canvasX.moveTo(this.x+c, this.y+s);
		Main.canvasX.lineTo(this.x-c, this.y-s);
	}
		
	else
	{
		this.r = this.v = this.a = 0;
		
		Main.canvasX.moveTo(this.x, this.y+Dot.Radius);
		Main.canvasX.lineTo(this.x, this.y-Dot.Radius);
	}
};//eof




Dot.prototype.force = function()
{
	this.a += 0.1;
};//eof