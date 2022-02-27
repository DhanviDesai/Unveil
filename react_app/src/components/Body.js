import React, {useState,useEffect, useRef} from 'react'
import '../App.css'
import UserShort from './UserShort'
import LinearProgress from '@mui/material/LinearProgress';
import Fade from '@mui/material/Fade';

function Body() {

  const [username, setUsername] = useState("")
  const [usersState, setUsersState] = useState(true)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])
  const [inputValue, setInputValue] = useState("")
  const userNameInput = useRef()

  useEffect(() => {
    getUsers().then(users => {
      setUsers(users)
    })
  },[])

  const getUsers = async () => {
    let response = await fetch("/users")
    let users = await response.json()
    return users
  }

  const clickedOnUser = (_id) => {
    console.log(_id)
  }

  var returnUsers = []
  users.map((user,i) => {
      returnUsers.push(<UserShort key={i} _id={user["_id"]} name={user["name"]} username={user["username"]} avatar_url={user["avatar_url"]} html_url={user["html_url"]} repo_count={user["repo_count"]} followers={user["followers"]} following={user["following"]} onClick={clickedOnUser} />)
  })

  const handleSearchUser = event => {
    setUsername(event.target.value)
    setInputValue(event.target.value)
  }

  const handleKeyDown = event => {
    if(event.keyCode === 13){
      setUsersState(false)
      setLoading(true)
      fetchUser().then((user) => {
        users.push(user)
        setUsersState(true)
        setLoading(false)
        setInputValue("")
        userNameInput.current.blur()
      }).catch((error) => {
        console.log(error)
        alert("Something went wrong in fetching data, please check the entered username")
        setUsersState(true)
        setLoading(false)
        setInputValue("")
      })
      
    }
  }

  const fetchUser = async () => {
    let response = await fetch("/user/"+username)
    if(! response.ok) throw new Error(response.status)
    let newly_added_user = await response.json()
    return newly_added_user
  }

  return (
    <div>
      <div className="search-wrapper">
        <h1 className="title">Unveil</h1>
        <div className='search-div'>
          <button className="search-button"/>
          <input className="search-bar" value={inputValue} ref={userNameInput} type="text" placeholder="Search user" onChange={handleSearchUser} onKeyDown={handleKeyDown} />
        </div>
      </div>
      <div style={{marginTop:'8px'}}>
        <Fade in={loading}>
            <LinearProgress />
          </Fade>
      </div>      
      <Fade in={usersState}>
        <div className={usersState?"main-content make-visible":"main-content make-invisible-animation make-invisible"} >
          {returnUsers}
        </div>
      </Fade>      
    </div>
    
  )
}

export default Body