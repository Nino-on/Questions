
var questions = [
    {
      title: "What color is Darth Vader's lightsaber?",
      choices: ["Green", "Blue", "Red", "Yellow"],
      answer: "Red"
    },
    {
        title: "What is Luke's last name?",
        choices: ["Skywalker", "Oceanrunner", "Skyforce", "Desertfox"],
        answer: "Skywalker"
    },
    {
        title: "In how many Parsecs did the Millennium Falcon complete the Kessel Run",
        choices: ["14", "12", "18", "24"],
        answer: "12"
    },
    {
        title: "What planet did the Death Star blow up in A New Hope",
        choices: ["Tatooine", "Coruscant", "Kashyyyk", "Alderaan"],
        answer: "Alderaan"
    },
    {
        title: "What is the true identify of the Emperor",
        choices: ["Windu", "Palpatine", "Calrissian", "Solo"],
        answer: "Palpatine"
    },
    ]
    function pageLoad(){
        document.getElementById("questionOne").innerText=questions[0].title;
        document.getElementById("questionTwo").innerText=questions[1].title;
        document.getElementById("questionThree").innerText=questions[2].title;
        document.getElementById("questionFour").innerText=questions[3].title;
        document.getElementById("questionFive").innerText=questions[4].title;
      //a1
        document.getElementById("Green").innerText=questions[0].choices[0];
        document.getElementById("Blue").innerText=questions[0].choices[1];
        document.getElementById("Red").innerText=questions[0].choices[2];
        document.getElementById("Yellow").innerText=questions[0].choices[3];
      //a2
        document.getElementById("Skywalker").innerText=questions[1].choices[0];
        document.getElementById("Oceanrunner").innerText=questions[1].choices[1];
        document.getElementById("Skyforce").innerText=questions[1].choices[2];
        document.getElementById("Desertfox").innerText=questions[1].choices[3];
      //a3
        document.getElementById("14").innerText=questions[2].choices[0];
        document.getElementById("12").innerText=questions[2].choices[1];
        document.getElementById("18").innerText=questions[2].choices[2];
        document.getElementById("24").innerText=questions[2].choices[3];
      //a4
        document.getElementById("Tatooine").innerText=questions[3].choices[0];
        document.getElementById("Coruscant").innerText=questions[3].choices[1];
        document.getElementById("Kashyyyk").innerText=questions[3].choices[2];
        document.getElementById("Alderaan").innerText=questions[3].choices[3];
      //a5
        document.getElementById("Windu").innerText=questions[4].choices[0];
        document.getElementById("Palpatine").innerText=questions[4].choices[1];
        document.getElementById("Calrissian").innerText=questions[4].choices[2];
        document.getElementById("Solo").innerText=questions[4].choices[3];
      
       
        function timer() {
          count=count-1;
          if (count <=0)
          {
            clearInterval(counter);
            return;
          }
          
        }
      
      }
     

    
      //q1
function correctFunction(){
  document.getElementById("userAnswer").innerText="Correct";
  document.getElementById("Green").disabled=true;
  document.getElementById("Blue").disabled =true;
  document.getElementById("Red").disabled =true;
  document.getElementById("Yellow").disabled =true;
  
}

function wrongFunction(){
  document.getElementById("userAnswer").innerText="Wrong";
  document.getElementById("Green").disabled=true;
  document.getElementById("Blue").disabled =true;
  document.getElementById("Red").disabled =true;
  document.getElementById("Yellow").disabled =true;
}
//q2
function correctFunction2(){
  document.getElementById("userAnswer2").innerText="Correct";
  document.getElementById("Skywalker").disabled=true;
  document.getElementById("Oceanrunner").disabled =true;
  document.getElementById("Skyforce").disabled =true;
  document.getElementById("Desertfox").disabled =true;
  score++;
}
function wrongFunction2(){
  document.getElementById("userAnswer2").innerText="Wrong";
  document.getElementById("Skywalker").disabled=true;
  document.getElementById("Oceanrunner").disabled =true;
  document.getElementById("Skyforce").disabled =true;
  document.getElementById("Desertfox").disabled =true;
}
//q3
function correctFunction3(){
  document.getElementById("userAnswer3").innerText="Correct";
  document.getElementById("14").disabled=true;
  document.getElementById("12").disabled =true;
  document.getElementById("18").disabled =true;
  document.getElementById("24").disabled =true;
  
}
function wrongFunction3(){
  document.getElementById("userAnswer3").innerText="Wrong";
  document.getElementById("14").disabled=true;
  document.getElementById("12").disabled =true;
  document.getElementById("18").disabled =true;
  document.getElementById("24").disabled =true;
}
//q4
function correctFunction4(){
  document.getElementById("userAnswer4").innerText="Correct";
  document.getElementById("Tatooine").disabled=true;
  document.getElementById("Coruscant").disabled =true;
  document.getElementById("Kashyyyk").disabled =true;
  document.getElementById("Alderaan").disabled =true;
  score++;
}
function wrongFunction4(){
  document.getElementById("userAnswer4").innerText="Wrong";
  document.getElementById("Tatooine").disabled=true;
  document.getElementById("Coruscant").disabled =true;
  document.getElementById("Kashyyyk").disabled =true;
  document.getElementById("Alderaan").disabled =true;
}
//5
function correctFunction5(){
  document.getElementById("userAnswer5").innerText="Correct";
  document.getElementById("Windu").disabled=true;
  document.getElementById("Palpatine").disabled =true;
  document.getElementById("Calrissian").disabled =true;
  document.getElementById("Solo").disabled =true;

}
function wrongFunction5(){
  document.getElementById("userAnswer5").innerText="Wrong";
  document.getElementById("Windu").disabled=true;
  document.getElementById("Palpatine").disabled =true;
  document.getElementById("Calrissian").disabled =true;
  document.getElementById("Solo").disabled =true;
}
