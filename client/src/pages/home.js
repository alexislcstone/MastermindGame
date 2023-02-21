import {useState,useEffect} from 'react';

import './home.css';
import SelectionList from '../components/selectionList.js';
import MakeNewGuessBar from '../components/makeNewGuessBar.js';
import PastGuessesList from '../components/pastGuessesList.js';
import api from '../API';

export default function Home({currGame}){
  const colorList = ['red','orange','yellow','green','blue','indigo','purple','black','pink']
  const [guessArr,setGuessArr]=useState([-1,-1,-1,-1])
  const [currGuessIndex, setCurrGuessIndex]=useState(0)
  //array of past guesses objects
  const [pastGuesses,setPastGuesses] = useState([])

  //get the list of guess for this game with the gameId
  useEffect(() => {
    async function fetchData() {
      const data = await api.getGuesses({gameId:currGame._id});
      console.log(data.data);
      setPastGuesses(data.data);
    }
    fetchData();
  }, [currGuessIndex])
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
       currGame={currGame}
      />
      <PastGuessesList
       colorList={colorList}
       pastGuesses={pastGuesses}
      />
    </div>
  )
}