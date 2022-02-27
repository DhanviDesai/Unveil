import React, {useState,useEffect} from 'react'
import '../App.css'
import UserShort from './UserShort'

function Body() {

  const [username, setUsername] = useState("")
  const [state, setState] = useState(true)
  const [users, setUsers] = useState([])

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
  }

  const handleKeyDown = event => {
    if(event.keyCode === 13){
      console.log("Pressed enter")
      console.log(username)
      setState(false)
    }
  }

  return (
    <div>
      <div className="search-wrapper">
        <h1 className="title">Unveil</h1>
        <div className='search-div'>
          <button className="search-button"/>
          <input className="search-bar" type="text" placeholder="Search user" onChange={handleSearchUser} onKeyDown={handleKeyDown} />
        </div>
      </div>
      <div className={state?"main-content make-visible":"main-content make-invisible"} >
        {returnUsers}
      </div>
    </div>
    
  )
}

export default Body