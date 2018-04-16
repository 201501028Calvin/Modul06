var pesawat =
{
	setSayap: function (n)
	{
		this.sayap = n;
		return this;
	},
	setRoda: function (n)
	{
		this.roda = n;
		return this;
	},
	setPenumpang: function (n)
	{
		this.penumpang = n;
		return this;
	},
	lepasLandas: function ()
	{
		console.log("Pesawat berisi " + this.penumpang + " orang!");
		console.log("Pesawat memiliki " + this.sayap + " buah sayap!");
		console.log("Pesawat memiliki " + this.roda + " buah roda!");
		console.log("Pesawat lepas landas!"); 
	}
};

pesawat.setSayap(2)
	   .setRoda(3)
	   .setPenumpang(200)
	   .lepasLandas();