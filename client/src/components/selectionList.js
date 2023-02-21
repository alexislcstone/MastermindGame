import SelectionIcon from './selectionIcon.js';
import './selectionList.css'
export default function SelectionList({level,setGuessArr,guessArr,currGuessIndex,setCurrGuessIndex,colorList}){
  const levelObj={
      'EASY':4,
      'NORMAL':7,
      'HARD':9
  }
  return(
    <div className='selection-list'>
      {
        colorList.slice(0,levelObj[level]+1).map((icon,key)=>
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