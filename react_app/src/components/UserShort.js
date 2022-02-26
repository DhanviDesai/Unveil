import React from 'react'

function UserShort({username, repo_count, avatar_url, html_url}) {
  return (
        <div className='user-short'>
            <div className='user-name'>
            <img className='user-logo' src={avatar_url}/>
              <p>{username}</p>
            </div>
            {/* <p>Repo Count: {repo_count}</p> */}
            <a href={html_url}>View in github</a>
        </div>
  )
}

export default UserShort