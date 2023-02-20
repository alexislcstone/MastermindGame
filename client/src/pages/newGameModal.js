import NewGameButton from '../components/newGameButton.js';
import ResumeGameButton from '../components/resumeGameButton.js';
import {useEffect,useState} from 'react';
import api from '../API';
import './home.css';

export default function NewGameModal({setCurrGame,setPage}){
  const [canResume,setCanResume] = useState()
  useEffect(() => {
    async function fetchData() {
      const data = await api.getGame()
      setCanResume(!data.data[0].complete);
    }
    fetchData();
  }, [])
  return(
    <div className="home-container">
      <div>
        <h1>Would you like to start a new game?</h1>
        <div style={{display:'flex',justifyContent:'space-around'}}>
          <NewGameButton setPage={setPage} setCurrGame={setCurrGame}/>
          {canResume?<ResumeGameButton setPage={setPage} setCurrGame={setCurrGame}/>:null}
        </div>
      </div>
    </div>
  )
}

