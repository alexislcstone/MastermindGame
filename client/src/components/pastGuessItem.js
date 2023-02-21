import SelectionIcon from './selectionIcon.js';

export default function PastGuessItem({color,guess}){
  return(
    <div>
      past guesses list
      <SelectionIcon color={color} input={true} />
      <div>
        <div>{guess.numCorrectGuesses} correct number</div>
        <div>{guess.numCorrectPosition} correct position</div>
      </div>
    </div>
  )
}