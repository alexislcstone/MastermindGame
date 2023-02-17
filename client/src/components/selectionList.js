import SelectionIcon from './selectionIcon.js';
import './selectionList.css'
export default function SelectionList(){
  const selectionArr = ['red','orange','yellow','green','blue','indigo','purple','black','pink']

  return(
    <div className='selection-list'>
      {
        selectionArr.slice(0,8).map((icon,key)=><SelectionIcon color={selectionArr[key]} />)
      }
    </div>
  )
}