let input = document.getElementById( "input" );
let btn = document.querySelector(".button-5");
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById("guesses");

let answer = Math.floor(Math.random() * 100)+1;
let numGesses = 0;

btn.addEventListener('click' , ()=>{
    guessesNumber();
});

function guessesNumber(){
    if(input.value < 1 || input > 100 || isNaN(input.value))
    {
        wrng.innerHTML = 'Enter a no between 1 to 100';
    }
    else 
    {
        numGesses++;
        guesses.innerHTML = `No. of  Guess : ${numGesses}` ;
        if(input.value > answer)
        {
            wrng.innerHTML = 'Too High! Try Lower';
            input.value = "";
        }
        else if(input.value < answer)
        {
            wrng.innerHTML = 'Too Low! Try Higher';
            input.value = "";
        }
        else
        {
            wrng.innerHTML = 'You guessed it correct';
            btn.disabled = true;
            setTimeout(( ) => {location.reload()},5000);
        }
    }
}