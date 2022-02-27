import React, {useEffect, useState} from 'react'
import UserShort from './UserShort'

function MainComponent() {

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

    var returnUsers = []
    users.map((user,i) => {
        returnUsers.push(<UserShort name={user["name"]} username={user["username"]} avatar_url={user["avatar_url"]} html_url={user["html_url"]} repo_count={user["repo_count"]} followers={user["followers"]} following={user["following"]} />)
    })
    

  return (
    <div className='main-content'>
        {returnUsers}
      </div>
  )
}

export default MainComponent