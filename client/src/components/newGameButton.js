import api from '../API';
import './newGameButton.css';
//this function creates a new Game in the games table
export default function NewGameButton({setResultView,setGameEnded,setPage,setCurrGame}){

  const handleClick=async()=>{
    let answerSequence = await api.getNewAnswerSequence();
    const answerArr = answerSequence.data.split('\n').slice(0,4);
    const data = await api.createNewGame({answerSequence:answerArr})
    setCurrGame(data.data[0])
    setPage('HOME')
    setGameEnded(false)
    setResultView('')
  }
  return(
    <div>
      <input onClick={handleClick} type='button' className='new-game-button' value='New Game'/>
    </div>
  )
}