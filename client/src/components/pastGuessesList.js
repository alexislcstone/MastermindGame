import PastGuessItem from './pastGuessItem.js';

export default function PastGuessesList({colorList,pastGuesses}){
  function numberDisplay(numCorrect){
    if(numCorrect>1 || numCorrect===0){
      return <div>{numCorrect} correct colors</div>
    }else if(numCorrect===1){
      return <div>{numCorrect} correct color</div>
    }
  }
  function positionDisplay(posCorrect){
    if(posCorrect>1 || posCorrect===0){
      return <div>{posCorrect} correct positions</div>
    }else if(posCorrect===1){
      return <div>{posCorrect} correct position</div>
    }
  }
  return(
    <div>
      {
        pastGuesses?.map((guess,key)=>
        (<div className='guess-icons guess-bar'>
          {guess?.guessesList.map((icon,key)=>((<PastGuessItem guess={guess} color={colorList[icon]} input={true} />)))}
          {numberDisplay(guess.numCorrectGuesses)}
          {positionDisplay(guess.numCorrectPosition)}
        </div>)
        )
      }
    </div>
  )
}