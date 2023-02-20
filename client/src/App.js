import './App.css';
import Home from './pages/home.js';
import NewGameModal from './pages/newGameModal.js';
import {useState} from 'react';
function App() {
  const [currGame, setCurrGame]=useState({})
  const [page,setPage]=useState('NEW GAME')

  function renderView(){
    switch(page){
      case "NEW GAME":
        return <NewGameModal setCurrGame={setCurrGame} setPage={setPage}/>;
      case "HOME":
        return <Home currGame={currGame}/>;
      default:
        return <NewGameModal setCurrGame={setCurrGame} setPage={setPage}/>;
    }
  }
  return (
    <div className="App">
      {/* get/create the new current game info from the newgamemodal*/}
      {renderView()}
    </div>
  );
}

export default App;
