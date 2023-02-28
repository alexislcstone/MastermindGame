import NewGameButton from './newGameButton.js';
import './winLoseComponent.css';

export default function WinLoseComponent({currUser,setGameEnded,setCurrGame,setPage,resultView,setResultView}){
  function handleClick(){
    setResultView('')
  }
  return(
    <div className='win-lose-modal'>
      <div onClick={handleClick} className='close-modal'>❌</div>
      {
        resultView==='WIN'?<h1>YOU WIN!</h1>:<h1>SORRY, YOU LOST</h1>
      }
      Would you like to play another game?
      <NewGameButton
      setGameEnded={setGameEnded}
      setCurrGame={setCurrGame}
      setPage={setPage}
      setResultView={setResultView}
      currUser={currUser}
      />
    </div>
  )
}