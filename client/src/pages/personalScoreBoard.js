import PersonalGamesList from '../components/personalGamesList.js'
import GlobalUserRanking from '../components/globalUserRanking.js'
import {useEffect,useState} from 'react'
import api from '../API';

export default function PersonalScoreBoard({currUser,setPage}){
  let [gList, setGList]=useState([])
  let [toggleScoreBoard,setToggleScoreBoard] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const completedData = await api.getCompletedGames({userId:currUser._id})
      setGList(completedData.data);
    }
    fetchData();
  }, [])

  function handleToggle(){
    setToggleScoreBoard(prev=>!prev)
  }

  return(
    <div className="home-container">
      <div className="backtogame-button" onClick={()=>setPage('NEW GAME')}>Go Back to Game</div>
      <div>
        <div onClick={handleToggle} style={{color:`${toggleScoreBoard?'white':'#4CAF50'}`,background:`${toggleScoreBoard?'#4CAF50':'white'}`}} className="toggle-scoreboard-button">Personal Scoreboard</div>
        <div onClick={handleToggle} style={{color:`${toggleScoreBoard?'#4CAF50':'white'}`,background:`${toggleScoreBoard?'white':'#4CAF50'}`}} className="toggle-scoreboard-button">Global Leaderboard</div>
      </div>
      {
        toggleScoreBoard?<h1>Your total score: {currUser.totalScore || 0}</h1>:<h1 className='global-h1'>GLOBAL RANKING</h1>
      }
      {
        toggleScoreBoard?<PersonalGamesList gList={gList}/>:<GlobalUserRanking/>
      }
    </div>
  )
}