"use strict";

const personalMovieDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: false,

	start: function(){
		personalMovieDB.count = +prompt('How many movies did you watch?', '');
	
		while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
			personalMovieDB.count = +prompt('How many movies did you watch?', '');
		}
	},

	rememberMyFilms: function(){
		for(let i = 0; i < 2; i++){
			const a = prompt('Latest film you watched?'),
				b = prompt('How do yo rate it?');
				if(a != null && b != null || a != '' && b != '' || a.length < 50){
					personalMovieDB.movies[a] = b;
					console.log('done');
				}
				else{
					console.log('error');
					i--;
				}
		}
	},

	detectPersonalLevel: function(){
		if(personalMovieDB.count < 10){
			console.log('Too little movies.');
		}
		else if(personalMovieDB.count > 10 && personalMovieDB.count < 30){
			console.log('Classic');
		}
		else if(personalMovieDB.count > 30){
			console.log('You are cinemamiac');
		}
		else{
			alert('error');
		}
	},

	showMyDB: function(hidden){
		if(!hidden){
			console.log(personalMovieDB);
		}
	},

	toggleVisibleMyDB: function(){
		if(personalMovieDB.private){
			personalMovieDB.private = false;
		}
		else{
			personalMovieDB.private = true;
		}
	},
	writeYourGenres: function(){
		for(let i = 1; i < 2; i++){
			let genres = prompt(`Tap your favorite genres through coma...`).toLowerCase();
			if(genres == '' || genres == null){
				console.log('You put wrong data.');
				i--;
			}
			else{
				personalMovieDB.genres = genres.split(', ');
			}
		}
		personalMovieDB.genres.forEach((item, i) => {
			console.log(`Your favorite genre ${i}, is ${item}`);
		});
	}
};