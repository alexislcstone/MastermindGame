import './guessIcon.css';

export default function GuessIcon({color,currGuessIndex,setCurrGuessIndex,id,setGuessArr,guessArr,input}){
  return(
    <div>
      <div className = 'guess-icon' style={{backgroundColor:color?`${color}`:'grey'}}></div>
    </div>
  )
}