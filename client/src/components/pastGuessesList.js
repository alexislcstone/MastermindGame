import PastGuessItem from './pastGuessItem.js';

export default function PastGuessesList({colorList,pastGuesses}){
  return(
    <div>
      past guesses list
      {
        pastGuesses?.map((guess,key)=>
        guess?.guessesList.map((icon,key)=>(<PastGuessItem guess={guess} color={colorList[icon]} input={true} />))
        )
      }
    </div>
  )
}