import './submitButton.css'

export default function SubmitButton({guessArr,setGuessArr,setCurrGuessIndex,currGame}){
  //need to work on the onSubmit logic here
    //check if any numbers are in original sequence
    //check if the correct numbers' locations are correct
    //make a post request to guesses table
  function handleClick(){
    let answer = currGame.answerSequence;
    let numCorrect = 0; // number of numbers correct
    let posCorrect = 0; // number of positions correct

    posCorrect = numCorrectPositions(answer)
    numCorrect = numCorrectNumbers(answer)
    console.log(`${numCorrect} correct numbers, ${posCorrect} correct positions`)
    // how make a post request to guesses to create a new guess

    //reset everything to default
  }

  //this function loops through the guess array and check how many positions match the answer array
  function numCorrectPositions(answer){
    let posCorrect = 0
    for(let i=0; i<answer.length; i++){
      if(guessArr[i]===Number(answer[i])){
          posCorrect++;
      }
    }
    return posCorrect;
  }

  //this function loops through the guess array and check how many numbers are the same with the answer array
  function numCorrectNumbers(answer){
    let numCorrect = 0;
    let answerCounts = uniqueCounts(answer);
    let guessCounts = uniqueCounts(guessArr);
    let guessedNumbers=Object.keys(guessCounts);
    for(let i=0; i<guessedNumbers.length; i++){
      let guessedNumber=guessedNumbers[i];
      if (guessedNumber in answerCounts){
        numCorrect+=Math.min(guessCounts[guessedNumber],answerCounts[guessedNumber]);
      }
    }
    return numCorrect;
  }
  //helper function that constructs a map (a JS object) with keys for each unique number/index appearing in the input array, with values being the number of times that key appears
  //input: an array of numbers; example: [3,2,5,3]
  //output: a JS object mapping each unique number to the count of times that number appears; example: {"3":2, "2":1, "5":1}
  function uniqueCounts(array){
    let counts = {};
    for(let i=0; i<array.length; i++){
      if(!(array[i] in counts)){
        counts[array[i]]=1;
      }else{
        counts[array[i]]++;
      }
    }
    return counts;
  }

  return(
    <div>
      {
        guessArr[guessArr.length-1]>=0?
        <input onClick={handleClick} type='button' className='submit-button' value='Submit Button'/>
        : <input style={{backgroundColor:'grey'}} type='button' className='submit-button' value='Submit Button' disable/>
      }
    </div>
  )
}