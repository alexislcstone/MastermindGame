import api from '../API';
import './newGameButton.css';
//this function resumes to a previous game if its not finished
export default function ResumeGameButton({setPage,setCurrGame}){
  const handleClick=async()=>{
    const data = await api.getGame()
    console.log(data.data[0])
    setCurrGame(data.data[0])
    setPage('HOME')
  }
  return(
    <div>
      <input onClick={handleClick} type='button' className='new-game-button' value='Resume Game' style={{backgroundColor:'#e06540'}}/>
    </div>
  )
}