import './submitButton.css'
import api from '../API';

export default function SubmitButton({setResultView,setGameEnded,guessArr,setGuessArr,setCurrGuessIndex,currGame}){

  const handleClick=async()=>{
    let answer = currGame.answerSequence;
    let numCorrect = 0; // number of numbers correct
    let posCorrect = 0; // number of positions correct
    console.log('CURRGAME:=====',currGame)
    posCorrect = numCorrectPositions(answer)
    numCorrect = numCorrectNumbers(answer)

    // now make a post request to guesses to create a new guess
    const obj = {
      guessesList:guessArr,
      numCorrectPosition:posCorrect,
      numCorrectGuesses:numCorrect,
      gameId:currGame._id,
    }
    let guessList = await api.createGuess(obj)

    //=================reset everything to default====================
    //set all guesses to -1s again
    setGuessArr((prev)=>prev.map(guess=>-1))
    //set currGuess index to 0
    setCurrGuessIndex((prev)=>0)

    let numOfGuesses = guessList.data.length;
    //if posCorrect==4 AND numCorrect===4, update the current Game's score and date WON and complete status to true
    if(posCorrect==4 && numCorrect==4 && numOfGuesses<=10 ){
      const winObj = {
        date:new Date(),
        complete:true,
        gameScore:10-numOfGuesses+1,
        numOfGuesses,
        gameId:currGame._id
      }
      await api.updateGame(winObj);
      setResultView('WIN');
      setGameEnded(true);
    }else if(numOfGuesses>=10){
      //if number of guesses=10, date LOST and complete status to true, current points are still 0 since you lost
      const loseObj = {
        date:new Date(),
        complete:true,
        numOfGuesses,
        gameId:currGame._id
      }
      await api.updateGame(loseObj);
      setResultView('LOSE');
      console.log('HIT LOST');
      setGameEnded(true);
    }else{
      const guessObj = {
        numOfGuesses,
        gameId:currGame._id
      }
      await api.updateGame(guessObj)
    }

  }

  //this function loops through the guess array and check how many positions match the answer array
  function numCorrectPositions(answer){
    let posCorrect = 0
    for(let i=0; i<answer.length; i++){
      if(guessArr[i]==answer[i]){
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
        <input
        onClick={handleClick}
        type='button'
        className='submit-button'
        value='Submit Button'
        />
        :
        <input
        style={{backgroundColor:'grey'}}
        type='button'
        className='submit-button'
        value='Submit Button'
        disable
        />
      }
    </div>
  )
}