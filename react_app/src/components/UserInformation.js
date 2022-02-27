import React from 'react'
import '../App.css'

function UserInformation({name, username, avatar_url, repo_count, followers, following, avatar_class_name}) {
  return (
    <div>
        <div className="user-details">
        <img className={avatar_class_name} src={avatar_url} alt={username}/>
        <div className="names-container">
          <span className="name">{name}</span>
          <span className="username">{username}</span>
        </div>
      </div>
      <div className="user-extra">
        <span><strong className="bold">{repo_count}</strong> public repos</span>
        ·
        <span><strong className="bold">{followers}</strong> followers</span>
        ·
        <span><strong className="bold">{following}</strong> following</span>
      </div>
    </div>
  )
}

export default UserInformation