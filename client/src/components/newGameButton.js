import api from '../API';
import './newGameButton.css';
import {useState} from 'react';
//this function creates a new Game in the games table
export default function NewGameButton({setResultView,setGameEnded,setPage,setCurrGame}){
  let [toggleDifficulty, setToggleDifficulty] = useState(false)

  const openMenu = () => {
    setToggleDifficulty(true)
  }

  const handleClick=async(difficultyLevel)=>{
    const levelObj={
      'EASY':4,
      'NORMAL':7,
      'HARD':9
    }
    let answerSequence = await api.getNewAnswerSequence({level:levelObj[difficultyLevel]});
    const answerArr = answerSequence.data.split('\n').slice(0,4);
    let newGameObj = {
      answerSequence:answerArr,
      level:difficultyLevel
    }
    const data = await api.createNewGame(newGameObj)
    setCurrGame(data.data[0])
    setPage('HOME')
    setGameEnded(false)
    setResultView('')
  }
  return(
    <div>
      <input onClick={openMenu} type='button' className='new-game-button' value='New Game'/>
      {
        toggleDifficulty?
        <div className='levels-menu-container'>
          <div className='new-game-menu-button' onClick={()=>handleClick('EASY')}>Easy</div>
          <div className='new-game-menu-button' onClick={()=>handleClick('NORMAL')}>Normal</div>
          <div className='new-game-menu-button' onClick={()=>handleClick('HARD')}>Hard</div>
        </div>
        :null
      }
    </div>
  )
}