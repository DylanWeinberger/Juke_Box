
$(document).ready(function(){

	function Jukebox () {
		this.current_song = 0
		this.all_tracks = ["space.mp3","dance.mp3","rebel.mp3","changes.mp3","stardust.mp3"]
		
		this.playlist = [];
		this.new_track = function () {

		// 	var x = document.getElementById("audiofile").value;
		// var audio = new Audio(x);
		
			$("#name").html("<audio><source src= " + this.all_tracks[this.current_song] + " type='audio/mpeg'></audio>")
	
		}
		this.play_current_song = function () {
			$('audio')[0].play()
		};
		this.pause_current_song = function () {
			$('audio')[0].pause()
		}
		this.stop_current_song = function () {
			$('audio')[0].currentTime = 0;
		}
		
	}

	 

	song = new Jukebox
	song.new_track()

	document.getElementById("audiofile").addEventListener("change", function load_song(){
		var x = parseInt(document.getElementById("audiofile").value);
		song.current_song = x
		song.new_track()
		song.play_current_song()
	})

	
	document.getElementById("play").onclick=function () {
		song.play_current_song()
	}

	document.getElementById("pause").onclick=function () {
		song.pause_current_song()
	}

	document.getElementById("stop").onclick=function () {
		
		song.stop_current_song()
		song.pause_current_song()
	}

	document.getElementById("next_song").onclick=function () {
		console.log(song.current_song)
		
		if (song.current_song == song.all_tracks.length -1){
			song.current_song = 0
			song.play_current_song()
		}
		else {
		song.current_song += 1
		song.new_track()
		song.play_current_song()

	}
}

});
