import SelectionIcon from './selectionIcon.js';

export default function PastGuessItem({color,guess}){
  return(
    <div>
      <SelectionIcon color={color} input={true} />
    </div>
  )
}