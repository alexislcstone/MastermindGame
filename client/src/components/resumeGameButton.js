import api from '../API';
import './newGameButton.css';
//this function resumes to a previous game if its not finished
export default function ResumeGameButton({currUser,setPage,setCurrGame}){
  const handleClick=async()=>{
    const data = await api.getGame({userId:currUser._id})
    setCurrGame(data.data[0])
    setPage('HOME')
  }
  return(
    <div>
      <input onClick={handleClick} type='button' className='new-game-button' value='Resume Game' style={{backgroundColor:'#e06540'}}/>
    </div>
  )
}