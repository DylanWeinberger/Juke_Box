
$(document).ready(function(){
	function Jukebox () {
		this.current_song = 0
		this.all_tracks = ["1.mp3","2.mp3"]
		
		this.playlist = [];
		this.new_track = function () {

		// 	var x = document.getElementById("audiofile").value;
		// var audio = new Audio(x);
		
			$("#name").html("<audio><source src= " + this.all_tracks[this.current_song] + " type='audio/mpeg'></audio>")
	
		}
		this.play_current_song = function () {
			// console.log("play")
			$('audio')[0].play()
		};
		this.pause_current_song = function () {
			// console.log("pause")
			$('audio')[0].pause()
		}
		this.stop_current_song = function () {
			// console.log("restart")
			$('audio')[0].currentTime = 0;
		}
		
	}

	 

	song = new Jukebox
	song.new_track()

	document.getElementById("load").onclick = function load_song(){
		var x = document.getElementById("audiofile").value;
		song.current_song = x
		song.new_track()
		console.log(song.current_song)
	}

	
	document.getElementById("play").onclick=function () {
		// console.log("click play")
		song.play_current_song()
	}

	document.getElementById("pause").onclick=function () {
		// console.log("click pause")
		song.pause_current_song()
	}

	document.getElementById("stop").onclick=function () {
		
		song.stop_current_song()
		song.pause_current_song()
	}

	document.getElementById("next_song").onclick=function () {
		// console.log("click next")
		
		if (song.current_song == song.all_tracks.length){
			song.current_song = 0
		}
		else (){ song.current_song += 1
		}
		song.new_track()
	}

	$('#random_button').click(function () {
		// console.log("click next")
		song.current_song = Math.floor(Math.random()*song.all_tracks.length);
		song.new_track()
	})




})









// OLD



// $(document).ready(function(){

// Current track is first place in array of all tracks
// this.alltracks is hardcoded array
// this.playcurrent track will play current track

// this.pause will pause current track
// this.stop

// function Jukebox(song) {
// 	this.song = 0
// 	this.songlist = ["1.mp3", "2.mp3"]



// 	this.play = function(){

// 	}

// 	this.add_song = function(song)

// }



// function Song() {

// }











// // var x = document.getElementById("myAudio").ended;


// function Jukebox(songs) {
// 	this.songs = songs;
// 	var x = document.getElementById("audiofile").value;
// 	var audio = new Audio(x);
	
// 	songs.push(audio);

// 	console.log(songs)

// document.getElementById("add_song").onclick = function create_song(){

// var x = document.getElementById("audiofile").value;
// 	var audio = new Audio(x);
// 	var new_song = audio.create
	
// 	songs.push(new_song);

// }
// 	// if audio.ended = true

// var f = new Jukebox(["hello.mp3"])
// // Captures song times.
// var length = formatSecondsAsTime(audio.duration);
// document.getElementById("length").innerHTML = length;

// var time = formatSecondsAsTime(audio.currentTime);
// document.getElementById("time").innerHTML = time;




// document.getElementById("play").onclick = function play(){
// 	console.log(audio);
// 	// audio.play();
// 	songs[0].play();
// 	console.log("test");
// 	console.log(songs);



// }

// document.getElementById("stop").onclick= function stop(){


// 	console.log(audio);
// 	audio.pause();
// 	audio.currentTime = 0;
// 	console.log("test");
// }

// document.getElementById("pause").onclick= function pause(){


// 	console.log(audio);
// 	audio.pause();
// 	console.log("test");
// }


// document.getElementById("add_song").onclick= function add_song(){

// 	var x = document.getElementById("audiofile").value;
// 	var audio = new Audio(x);
// 	this.songs.push(songs);

// }


// 	// this.add_song = function(x){
// 	// this.songs.push(x);
// 	// }
// }







// // Will render times in hh:mm:sec format

//  function formatSecondsAsTime(secs, format) {
//   var hr  = Math.floor(secs / 3600);
//   var min = Math.floor((secs - (hr * 3600))/60);
//   var sec = Math.floor(secs - (hr * 3600) -  (min * 60));

//   if (min < 10){ 
//     min = "0" + min; 
//   }
//   if (sec < 10){ 
//     sec  = "0" + sec;
//   }

//   return min + ':' + sec;
// }



// 	})

