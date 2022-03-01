let numberOfFilms;
const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false
};

function start(){
	numberOfFilms = +prompt('How many movies did you watch?', '');

	while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
		numberOfFilms = +prompt('How many movies did you watch?', '');
	}
}

function detectPersonalLevel(){
	if(numberOfFilms < 10){
		console.log('Too little movies.');
	}
	else if(numberOfFilms > 10 && numberOfFilms < 30){
		console.log('Classic');
	}
	else if(numberOfFilms > 30){
		console.log('You are cinemamiac');
	}
	else{
		alert('error');
	}
}

function writeYourGenres(){
	let i = 1;
	for(let i = 1; i <= 3; i++){
		let answer = prompt(`What is your favorite genre number ${i}?`);
			personalMovieDB.genres[i - 1] = answer;
	}
}

function showMyDB(hidden){
	if(!hidden){
		console.log(personalMovieDB);
	}
}

start();
showMyDB(personalMovieDB.private);
writeYourGenres();
detectPersonalLevel();
	



console.log('End of the game.');