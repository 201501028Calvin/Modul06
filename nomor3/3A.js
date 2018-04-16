var obj = {name:"Agus"};

var greeting = function(a,b,c)
{
	return "Selamat datang " + this.name + " ke " + a + " " + b + " di " + c; 
};

console.log(greeting.call(obj,"Tambakreja","Cilacap","Jawa Tengah"));