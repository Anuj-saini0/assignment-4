/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
(function(window) {
	var byeSpeaker = {};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function(name) {
  		console.log(speakWord + " " + name);
	}
	window.byeSpeaker = byeSpeaker;
})(window);

