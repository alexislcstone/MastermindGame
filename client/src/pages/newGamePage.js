import NewGameButton from '../components/newGameButton.js';
import ResumeGameButton from '../components/resumeGameButton.js';
import {useEffect,useState} from 'react';
import api from '../API';
import './home.css';

export default function NewGamePage({setGameEnded,currUser,setGamesList,setCurrGame,setPage}){
  const [canResume,setCanResume] = useState()

  useEffect(() => {
    async function fetchData() {
      const data = await api.getGame({userId:currUser._id})
      const completedData = await api.getCompletedGames({userId:currUser._id})
      setCanResume(!data.data[0].complete);
      setGamesList(completedData.data);
    }
    fetchData();
  }, [])
  return(
    <div className="home-container">
      <div>
        <h1>Would you like to start a new game?</h1>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <NewGameButton
          currUser={currUser}
          setPage={setPage}
          setCurrGame={setCurrGame}
          setGameEnded={setGameEnded}
          />
          {canResume?<ResumeGameButton currUser={currUser} setPage={setPage} setCurrGame={setCurrGame}/>:null}
        </div>
      </div>
    </div>
  )
}

