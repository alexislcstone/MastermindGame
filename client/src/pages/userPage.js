import {useState} from 'react';
import './userPage.css';
import api from '../API';

export default function UserPage({setCurrUser,setPage,}){
  let [searchList,setSearchList] = useState([])
  let [inputValue, setInputValue] = useState([])
  let [usernameList,setUsernameList] = useState({})
  let handleUserClick = async(e) => {
    setCurrUser(searchList[e.target.id]);
    setPage('NEW GAME');
  }

  let handleClick = async(e) => {
    const obj={
      userName:inputValue
    }

    let data = await api.createNewUser(obj)
    setCurrUser(data.data[0])
    setPage('NEW GAME')
  }

  let handleSearch = async(e) => {
    setInputValue(e.target.value)
    const obj={
      userName:e.target.value
    }
    let data = await api.getSearchedUsers(obj)
    setSearchList(data.data)
    let tempUsernameList = {}
    data.data.forEach(user=>{
      tempUsernameList[user.userName]=true;
    })
    setUsernameList(tempUsernameList)
  }

  return(
    <div className = 'user-page-container'>
      <h1>Find or Create an Account</h1>
      <h2>
        Search for your old username. If you can't find it, a new account will be created!
      </h2>
      <form className='search-bar'>
        <input
        onChange={handleSearch}
        className='search-input'
        type='text'
        placeholder='search for / create a username'
        />
        {
          (inputValue in usernameList)?
          <input
          style={{background:'grey'}}
          className='submit-button'
          type='Button'
          value='Create an Account'
          disable
          />
          :<input
          onClick={handleClick}
          className='submit-button'
          type='Button'
          value='Create an Account'
          />
        }
      </form>
      <div className='user-list-container'>
        {
          searchList.length<1?null:<div>Click on the correct user below</div>
        }
        <div className='user-list'>
          {
            searchList.map((user,index)=>{
              return(
                <div onClick={handleUserClick} id={index} className='user-item'>{user.userName}</div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}