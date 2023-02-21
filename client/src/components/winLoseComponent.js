import NewGameButton from './newGameButton.js';
import './winLoseComponent.css';

export default function WinLoseComponent({setGameEnded,setCurrGame,setPage,resultView,setResultView}){
  console.log('RESULTS VIEW:',resultView)
  function handleClick(){
    setResultView('')
  }
  return(
    <div className='win-lose-modal'>
      <div onClick={handleClick} className='close-modal'>❌</div>
      {
        resultView==='WIN'?<h1>YOU WON!</h1>:<h1>SORRY, YOU LOST</h1>
      }
      Would you like to play another game?
      <NewGameButton
      setGameEnded={setGameEnded}
      setCurrGame={setCurrGame}
      setPage={setPage}
      setResultView={setResultView}
      />
    </div>
  )
}