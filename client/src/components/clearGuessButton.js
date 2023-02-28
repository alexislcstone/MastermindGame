export default function ClearGuessButton({ setGuessArr, setCurrGuessIndex}){
  function handleClick(){
    //set all guesses to -1s again
    setGuessArr((prev)=>prev.map(guess=>-1))
    //set currGuess index to 0
    setCurrGuessIndex((prev)=>0)
  }
  return(
    <div className='clear-guess-button'>
      <div style={{color:'grey',cursor:'pointer'}} onClick={handleClick}>
        Clear Guess
      </div>
    </div>
  )
}