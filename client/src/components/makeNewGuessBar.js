import {useState,useEffect} from 'react';

import SelectionIcon from './selectionIcon.js';
import SubmitButton from './submitButton.js'
import ClearGuessButton from './clearGuessButton.js'

import './makeNewGuessBar.css';

export default function MakeNewGuessBar({setGuessArr,guessArr,colorList,setCurrGuessIndex}){

  return(
    <div className='guess-bar'>
      <div className='guess-icons'>
        {
        guessArr.map((icon,key)=>
        (<SelectionIcon color={colorList[icon]} input={true} />)
        )}
      </div>
      <ClearGuessButton
      setGuessArr={setGuessArr}
      setCurrGuessIndex={setCurrGuessIndex}
      />
      <SubmitButton />
    </div>
  )
}