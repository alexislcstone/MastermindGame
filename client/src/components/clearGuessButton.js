export default function ClearGuessButton({ setGuessArr, setCurrGuessIndex}){
  function handleClick(){
    console.log('clearGuessButton')
    //set all guesses to -1s again
    setGuessArr((prev)=>prev.map(guess=>-2))
    //set currGuess index to 0
    setCurrGuessIndex((prev)=>0)
  }
  return(
    <div className='clear-guess-button'>
      <div onClick={handleClick}>
        Clear Guess
      </div>
    </div>
  )
}