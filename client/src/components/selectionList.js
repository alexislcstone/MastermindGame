import SelectionIcon from './selectionIcon.js';
import './selectionList.css'
export default function SelectionList({setGuessArr,guessArr,currGuessIndex,setCurrGuessIndex,colorList}){

  return(
    <div className='selection-list'>
      {
        colorList.slice(0,8).map((icon,key)=>
        <SelectionIcon
        setGuessArr={setGuessArr}
        guessArr={guessArr}
        currGuessIndex={currGuessIndex}
        setCurrGuessIndex={setCurrGuessIndex}
        id={key}
        color={colorList[key]}
        />)
      }
    </div>
  )
}