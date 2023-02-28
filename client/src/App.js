import './App.css';
import Home from './pages/home.js';
import UserPage from './pages/userPage.js';
import NewGameModal from './pages/newGameModal.js';
import PersonalScoreBoard from './pages/personalScoreBoard.js'

import {useState} from 'react';
function App() {
  const [currGame, setCurrGame]=useState({});
  const [page,setPage]=useState("USER PAGE");
  const [gamesList, setGamesList] = useState([]);
  const [currUser,setCurrUser] = useState([]);

  function renderView(){
    switch(page){
      case "USER PAGE":
        return <UserPage
        setPage={setPage}
        setCurrUser={setCurrUser}
        />;
      case "NEW GAME":
        return <NewGameModal
        setGamesList={setGamesList}
        setCurrGame={setCurrGame}
        setPage={setPage}
        currUser={currUser}
        />;
      case "HOME":
        return <Home
        currGame={currGame}
        setCurrGame={setCurrGame}
        setPage={setPage}
        currUser={currUser}
        setCurrUser={setCurrUser}
        setGamesList={setGamesList}
        />;
      case "PERSONAL SCORE":
        return <PersonalScoreBoard
        setPage={setPage}
        currUser={currUser}
        />
      default:
        return <NewGameModal
        setCurrGame={setCurrGame}
        setPage={setPage}
        currUser={currUser}
        />;
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
