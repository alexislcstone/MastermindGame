import PersonalGamesItem from './personalGamesItem.js'

export default function PersonalGamesList({gList}){
  return(
    <div>
      <div className='personal-games-list'>
        <div className='personal-games-column topbar'>Difficulty</div>
        <div className='personal-games-column topbar'>Game Score</div>
        <div className='personal-games-column topbar'>Time</div>
      </div>
      {
        gList.map(game=><PersonalGamesItem game={game}/>)
      }
    </div>
  )
}