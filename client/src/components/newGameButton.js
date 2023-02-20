import api from '../API';
import './newGameButton.css';
//this function creates a new Game in the games table
export default function NewGameButton({setPage,setCurrGame}){
  const handleClick=async()=>{
    const data = await api.createNewGame()
        console.log(data.data[0])

    setCurrGame(data.data[0])
    setPage('HOME')
  }
  return(
    <div>
      <input onClick={handleClick} type='button' className='new-game-button' value='New Game'/>
    </div>
  )
}