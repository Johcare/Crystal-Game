// document loaded
$(document).ready(function() {

    // Get random number function
    // interval from  80 to 130
    var newNumber = 0;
    var currentScore = 0;
    var min = 80;
    var max = 130;
    var userpick = 0;
    var wins = 0;
    var looses = 0;
    var currentguess = 3;

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // looses
    // wins
    // took a class, and insert a text ,wins  и losse and guesses
    $('.newNumber').text(newNumber)
    $('.wins').text(wins)
    $('.looses').text(looses)
    $('.currentguess').text(currentguess)
    $('.currentScore').text(currentScore)

    //compputer
    //  
    var ScoreToGuess = getRandomInt(min, max);
    console.log(ScoreToGuess)
    var arrayOfScores = [];

    //  strting a for loop, running 4 times, and placing result 
    for (var i = 0; i < 4; i++) {

        var randomNumberForcrystal = getRandomInt(3, 30)
        arrayOfScores.push(randomNumberForcrystal)
    }

    console.log(arrayOfScores)

    $('.crystal').each(function(index, crystal) {

        $(crystal).attr('data-points', arrayOfScores[index])
            // $(crystal).attr('data-points', randomNumberForcrystal[index]);
            // crystal.data('points') = arrayOfScores[index];

    })

    // have 4 crystaals i0mg
    // then set the total value that you need to collect
    // and then set uo the vakue of the fcrystals 
    // then set uo the game function on click
    //use bootstarp for design
    // looses and wins
    //if user goes over the score the looses ++ 
    //if user scores the right pamount of points then wins++

    $('.crystal').on('click', function(event) {
        var userhoosen = parseInt($(this).data('points'));
        event.preventDefault()
        userpick += userhoosen;

        // 	console.log($(this).attr('src'))
        // console.log($(this).data('points'))
        console.log(userpick);
        if (userpick > ScoreToGuess) {
            alert('Not this time buddy');

            looses++;

            $('.looses').text(looses)
            ScoreToGuess = getRandomInt(min, max);
            userpick = 0;
            console.log("New Number is " + ScoreToGuess)
        } else if (userpick === ScoreToGuess) {
            wins++;
            $('.wins').text(wins)
            alert("You got it right ")
            ScoreToGuess = getRandomInt(min, max);
            userpick = 0;
            console.log("New Number is " + ScoreToGuess)

        }
        var currentguess;

        function myFunction() {
            var currentguess = document.createElement("INPUT");
            currentguess.setAttribute("type", "number");
            currentguess.setAttribute("value", "12345");
            document.body.appendChild(currentguess);
            currentguess = ScoreToGuess;
        }
    });

});