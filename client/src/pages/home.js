import './home.css';
import SelectionList from '../components/selectionList.js'
export default function Home(){
  return(
    <div className = 'home-container'>
      <h1>Make Your Guess -username-</h1>
      <SelectionList/>
    </div>
  )
}