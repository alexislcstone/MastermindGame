import './selectionIcon.css';

export default function SelectionIcon({color}){
  console.log(color)
  return(
    <div style={{backgroundColor:`${color}`}} className = 'selection-icon'>
    </div>
  )
}