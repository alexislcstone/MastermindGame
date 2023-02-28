import './personalGamesItem.css'
import { format, render, cancel, register } from 'timeago.js';

export default function PersonalGamesItem({game}){
  return(
    <div className='personal-games-item'>
      <div className='personal-games-column'>{game.level}</div>
      <div className='personal-games-column'>{game.gameScore}</div>
      <div className='personal-games-column'>{format(Date.parse(game.date))}</div>
    </div>
  )
}