function Game()
{
	function Question(question, answers, correct)
	{
		this.question = question;
		this.answers = answers;
		this.correct = correct; 
	}

	Question.prototype.displayQuestion = function()
	{
		console.log(this.question);

		for (var i = 0; i < this.answers.length; i++)
		{
			console.log(i + ' : ' + this.answers[i]);
		}
	}

	Question.prototype.checkAnswer = function(ans)
	{
		if (ans === this.correct)
		{
			Skor_Akhir += 1;
			console.log('Jawaban anda BENAR!!');
			console.log('');
		}
		else
		{
			console.log('Jawaban anda SALAH!! Coba lagi!');
			Salah_Jawab +=1;
			console.log('');
		}
	}

	var ql = new Question('Siapakah nama Rektor Stikom Yos Sudarso?',
	['Safar', 'Padosroha', 'Putu', 'Suradji'],
	'3'); 
	var q2 = new Question('Berapa jurusan yang ada di Stikom Yos Sudarso?',
	['1', '2', '3', '4'],
	'3');
	var q3 = new Question('Siapa yang berjualan di Kantin Stikom?',
	['Suher', 'Kristi', 'Kadar Family', 'Bu Jumirah'],
	'2');
	var q4 = new Question('Stikom menggunakan Internet Service Provider apa?',
	['Biznet', 'Telkom Speedy','Citranet'],
	'0');
	var q5 = new Question('Siapakah nama dosen tercantik di STIKOM ?',
	['Bu Eti', 'Bu Chika', 'Bu Yani' , 'Bu Nicke' , 'Bu Natalia'],
	'5');

	var questions = [ql, q2, q3, q4, q5];
	var Skor_Akhir = 0;
	var Salah_Jawab = 0;
	var Jumlah_Pertanyaan = 0;
		
	Berhenti:
	{
		for (;;)
		{
			var n = Math.floor(Math.random() * questions.length);

			questions[n].displayQuestion();

			var answer = prompt('Pilih jawaban yang benar!');

			if (answer == 'Exit')
			{
				console.log('');
				console.log('---Keluar Dari Permainan---');
				console.log('');
				console.log('Jumlah pertanyaan yang di jawab = ' + Jumlah_Pertanyaan);
				console.log('Jumlah jawaban yang salah = ' + Salah_Jawab);
				console.log('Skor akhir anda = ' + Skor_Akhir);
				break Berhenti;
			}

			Jumlah_Pertanyaan += 1 ;
			questions[n].checkAnswer(answer);
		}
	}
};