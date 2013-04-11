var player_1 = prompt('What is your name?', 'Guest')
var question_index = 0
var show_score = (function () {
        $("#score").text(question_index);
    });
alert("Welcome to the Quiz")
alert("Try find Wally and friends in 30 secs")

	$(document).ready(function(){
	  $("#Wally").click(function(){
	    $(this).hide();
	    $("#Wally-copy").hide();
	    question_index++;
	    show_score();	
	  });
	$("#man").click(function(){
	    $(this).hide();
	    $("#man-copy").hide();
	    question_index++;
	    show_score();
	  });
	$("#man-2").click(function(){
	    $(this).hide();
		$("#man-2-copy").hide();
		question_index++;
		show_score();
	  });
	$("#dog").click(function(){
	    $(this).hide();
		$("#dog-copy").hide();
		question_index++;
		show_score();
	  });
	$("#bigwoman").click(function(){
	    $(this).hide();
		$("#bigwoman-copy").hide();
		question_index++;
		show_score();
	  });
	$("#woman").click(function(){
	    $(this).hide();
		$("#woman-copy").hide();
		question_index++;
		show_score();
	  });
	$("#man-3").click(function(){
	    $(this).hide();
		$("#man-3-copy").hide();
		question_index++;
		show_score();
	  });
	$("#woman-2").click(function(){
	    $(this).hide();
		$("#woman-2-copy").hide();
		question_index++;
		show_score();
	  });
	$("#girl").click(function(){
	    $(this).hide();
		$("#girl-copy").hide();
		question_index++;
		show_score();
	  });
	});

var count=30;
var counter=setInterval(timer, 1000);

function timer()
{
  count=count-1;
  if (count <= -1)
  {
     clearInterval(counter);
     //counter ended, do something here
     alert("Time Up")
     alert(player_1 + " you found " + question_index)
    // function hidemissing() {
    // 	var x, divArray =["beach", "Wally", "man", "man-2", "dog", "bigwoman", "woman", "man-3", "woman-2", "girl"];
    // 	for (x in divArray) {
    // 		if (x) {document.getElementById(divArray[x]).style.display = 'none';}
    // 		hidemissing()
    //	}
   // }
    document.getElementById("beach").style.display = 'none';
    document.getElementById("Wally").style.display = 'none';
    document.getElementById("man").style.display = 'none';
    document.getElementById("man-2").style.display = 'none';
    document.getElementById("dog").style.display = 'none';
    document.getElementById("bigwoman").style.display = 'none';
    document.getElementById("woman").style.display = 'none';
    document.getElementById("man-3").style.display = 'none';
    document.getElementById("woman-2").style.display = 'none';
    document.getElementById("girl").style.display = 'none';

   	var level_2 = confirm("Are you ready for Level 2?")

   	if(level_2 == true) {
   		//document.getElementById("simpsons")
   	}else{
   		alert("Goodbye")
   	}
     return;
  }

  
 document.getElementById("timer").innerHTML=count + " secs";
}