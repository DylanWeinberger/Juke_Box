// $(document).ready(function(){
// 	// $(".jukebox_div").hide();

// 	function play_audio(task) {
// 		if(task == 'play') {
// 			$(".jukebox").trigger('play');
// 		}
// 		if(task == 'stop') {
// 			$(".jukebox").trigger('pause');
// 			$(".jukebox").prop("current_time", 0);
// 		}
// 	}
// });

 // var currentFile = "";
 //        function playAudio() {
 //            // Check for audio element support.
 //            if (window.HTMLAudioElement) {
 //                try {
 //                    var oAudio = document.getElementById('myaudio');
 //                    var btn = document.getElementById('play'); 
 //                    var audioURL = document.getElementById('audiofile'); 

 //                    //Skip loading if current file hasn't changed.
 //                    if (audioURL.value !== currentFile) {
 //                        oAudio.src = audioURL.value;
 //                        currentFile = audioURL.value;                       
 //                    }

 //                    // Tests the paused attribute and set state. 
 //                    if (oAudio.paused) {
 //                        oAudio.play();
 //                        btn.textContent = "Pause";
 //                    }
 //                    else {
 //                        oAudio.pause();
 //                        btn.textContent = "Play";
 //                    }
 //                }
 //                catch (e) {
 //                    // Fail silently but show in F12 developer tools console
 //                     if(window.console && console.error("Error:" + e));
 //                }
 //            }
 //        }


//  function Jukebox(play, stop, songs, add_song) {
// 	this.play = function play(){}
// 	this.stop = function stop(){}
// 	this.songs = [];
// 	this.add_song = function(x){
// 	this.songs.push(x);
// 	}
// }

// function load(){
	
// 	var audioURL = document.getElementById('audiofile');

// };

// function Song(file) {
// 	this.file = getElementById('audioFile').value;
// }

// $(".addsong_button").click(function Song(){

function load(){

var x = document.getElementById("audiofile").value;
var audio = new Audio(x);
audio.play();

console.log("tester");
 // onclick pause do x
document.getElementById("pause").onclick = function(){
		
		console.log(audio);
		audio.pause();
		console.log("test");
	};

document.getElementById("play").onclick = function(){
		
		console.log(audio);
		audio.play();
		console.log("test");
	};
	

};




