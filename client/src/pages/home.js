import {useState,useEffect} from 'react';

import './home.css';
import SelectionList from '../components/selectionList.js';
import MakeNewGuessBar from '../components/makeNewGuessBar.js';
import PastGuessesList from '../components/pastGuessesList.js';
import api from '../API';
import NewGameButton from '../components/newGameButton.js';
import WinLoseComponent from '../components/winLoseComponent.js';

export default function Home({setCurrUser,currUser,currGame,setCurrGame,setPage}){
  const colorList = ['red','orange','yellow','green','blue','indigo','#c934eb','black','pink','lime']
  const [guessArr,setGuessArr]=useState([-1,-1,-1,-1])
  const [currGuessIndex, setCurrGuessIndex]=useState(0)
  const [gameEnded,setGameEnded] = useState(false)
  //array of past guesses objects
  const [pastGuesses,setPastGuesses] = useState([])
  const [resultView, setResultView] = useState('');

  useEffect(() => {
    async function fetchData() {
      const data = await api.getGuesses({gameId:currGame._id});
      setPastGuesses(data.data);
    }
    fetchData();
  }, [pastGuesses,currGame])


  return(
    <div className = 'home-container'>
      <div className="backtogame-button" onClick={()=>setPage('PERSONAL SCORE')}>View Scoreboard</div>
      <h1>Make Your Guess, {currUser.userName}!</h1>
      <div style={{marginTop:'-40px',color:'grey',fontSize:'20px'}}>Your total score: {currUser.totalScore}</div>
      <div style={{color:'red'}}>You have {10-pastGuesses.length} guesses left</div>
      {
        gameEnded===false?
        null:
        <NewGameButton
        currUser={currUser}
        setGameEnded={setGameEnded}
        setPage={setPage}
        setCurrGame={setCurrGame}
        setResultView={setResultView}
        />
      }
      {
       gameEnded===false?
      <SelectionList
       colorList={colorList}
       setGuessArr={setGuessArr}
       guessArr={guessArr}
       currGuessIndex={currGuessIndex}
       setCurrGuessIndex={setCurrGuessIndex}
       level={currGame.level}
       />:null
      }
       {
       gameEnded===false?
       <MakeNewGuessBar
       currUser={currUser}
       setCurrUser={setCurrUser}
       colorList={colorList}
       setGuessArr={setGuessArr}
       guessArr={guessArr}
       setCurrGuessIndex={setCurrGuessIndex}
       currGame={currGame}
       setGameEnded={setGameEnded}
       resultView={resultView}
       setResultView={setResultView}
      />:null
       }
      <PastGuessesList
       colorList={colorList}
       pastGuesses={pastGuesses}
      />
      {resultView.length===0?
      null:
      (
        <div className='results-modal-container'>
          <WinLoseComponent
          currUser={currUser}
          resultView={resultView}
          setResultView={setResultView}
          setCurrGame={setCurrGame}
          setPage={setPage}
          setGameEnded={setGameEnded}
          />
        </div>)}
    </div>
  )
}