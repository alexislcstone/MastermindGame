import {useState,useEffect} from 'react';

import './home.css';
import SelectionList from '../components/selectionList.js';
import MakeNewGuessBar from '../components/makeNewGuessBar.js';

export default function Home(){
  const colorList = ['red','orange','yellow','green','blue','indigo','purple','black','pink']
  const [guessArr,setGuessArr]=useState([-1,-1,-1,-1])
  const [currGuessIndex, setCurrGuessIndex]=useState(0)
  let [rerender,setRerender]=useState(true)
  return(
    <div className = 'home-container'>
      <h1>Make Your Guess -username-</h1>
      <SelectionList
       colorList={colorList}
       setGuessArr={setGuessArr}
       guessArr={guessArr}
       currGuessIndex={currGuessIndex}
       setCurrGuessIndex={setCurrGuessIndex}
       />
      <MakeNewGuessBar
       colorList={colorList}
       setGuessArr={setGuessArr}
       guessArr={guessArr}
       setCurrGuessIndex={setCurrGuessIndex}
       setRerender={setRerender}
      />
    </div>
  )
}