import NewGameButton from '../components/newGameButton.js';
import ResumeGameButton from '../components/resumeGameButton.js';
import {useEffect,useState} from 'react';
import api from '../API';

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
    <div>
      <div>
        Would you like to start a new game?
        <div>
          <NewGameButton setPage={setPage} setCurrGame={setCurrGame}/>
          {canResume}
          {canResume?<ResumeGameButton setPage={setPage} setCurrGame={setCurrGame}/>:null}
        </div>
        {/* if there is a recent game unfinished, ask to resume old game. */}
      </div>
    </div>
  )
}

