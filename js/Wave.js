function Wave(x,y)
{
	this.x = x;
	this.y = y;
	this.d = 0;
	
	this.dists = [];
	
	for(var i=0; i<Dot.List.length; ++i)
		this.dists.push(this.distToDot(Dot.List[i]));
	
	Wave.List.push(this);
}//eoc



//static members
Wave.WaveSpeed = 1;
Wave.List = [];
Wave.MaxLength = 1000;

Wave.MoveAll = function()
{
	for (var i = 0; i <Wave.List.length; i++)
		Wave.List[i].move();
};


Wave.prototype.move = function()
{
	this.d += Wave.WaveSpeed;
	
	if(this.d>Wave.MaxLength)
	{
		var i = Wave.List.indexOf(this);
		Wave.List.splice(i, 1);
	}
	
	for(var i=0; i<Dot.List.length; ++i)
	{
		if( Math.abs(this.d-this.dists[i]) < 2 )
			Dot.List[i].force();
	}
};//eof


Wave.prototype.distToDot = function(dot)
{
	return Math.sqrt
	(
		Math.pow(this.x-dot.x, 2) + Math.pow(this.y-dot.y, 2)
	);
};