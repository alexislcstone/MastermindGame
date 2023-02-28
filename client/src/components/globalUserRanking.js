import {useEffect,useState} from 'react'
import api from '../API';
import './globalUserRanking.css'

export default function GlobalUserRanking({}){
  let [userRanking,setUserRanking] = useState([])
  useEffect(() => {
    async function fetchData() {
      const completedData = await api.getUsers()
      setUserRanking(completedData.data);
    }
    fetchData();
  }, [])
  return(
    <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
      <div className='global-games-list'>
        <div className='personal-games-column topbar'>Username</div>
        <div className='personal-games-column topbar'>Total Score</div>
        <div className='personal-games-column topbar'>Ranking</div>
      </div>
      {
        userRanking.map((user,key)=>{
          return (
            <div className='global-games-item'>
              <div className='global-games-column'>{user.userName}</div>
              <div className='global-games-column'>{user.totalScore}</div>
              <div className='global-games-column'>{key+1}</div>
            </div>
          )
        })
      }
    </div>
  )
}