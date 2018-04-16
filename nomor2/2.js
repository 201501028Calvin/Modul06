const Orang = (nama, gender, tanggalLahir) =>
{
	let namaSaya = nama,
		tanggalLahirSaya = new Date(tanggalLahir);
	
	const genderSaya = gender;
	
	return{
		setNama: (namaBaru) => namaSaya = namaBaru,
		nama:() => namaSaya,
		gender: (genderSaya) ? 'Laki-laki' : 'Perempuan',
		usia:() =>
			(new Date()).getFullYear() - tanggalLahirSaya.getFullYear()
	}
}
	
const agus = Orang('Agus', 1, '1995-10-21');
console.log(agus.nama());
console.log(agus.gender);
console.log(agus.usia());
console.log(agus.setNama('Agustinus'));
console.log(agus.nama());