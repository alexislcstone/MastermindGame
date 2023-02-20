import './selectionIcon.css';
import {useState,useEffect} from 'react';

export default function SelectionIcon({color,currGuessIndex,setCurrGuessIndex,id,setGuessArr,guessArr,input}){

  function handleClick(e){
    const clickedIndex = e.target.id
    let tempGuessArr = guessArr;
    tempGuessArr[currGuessIndex]=Number(clickedIndex);
    setGuessArr(tempGuessArr)
    setCurrGuessIndex(currGuessIndex+1)
  }
  return(
    <div>
      {
        input===true?
        <div className = 'selection-icon' style={{backgroundColor:color?`${color}`:'grey'}}></div>:
        <div id={id} style={{backgroundColor:`${color}`}}
        className = 'selection-icon selection-bar-icon'
        onClick={handleClick}
        ></div>
      }
      {/* <div id={id} style={{backgroundColor:`${color}`}}
        className = 'selection-icon'
        onClick={handleClick}
        ></div> */}
    </div>
  )
}