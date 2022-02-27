import React from 'react'
import logo from '../github-logo.png'

function UserShort({_id, name, username, repo_count, avatar_url, html_url, followers, following, onClick}) {

  const handleClick = () => {
    onClick(_id)
  }

  return (
    <div className="user-short" onClick={handleClick}>
      <div className="user-details">
        <img className="user-avatar" src={avatar_url} alt={username}/>
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
      <div className="user-footer">
        <a href={html_url}>
          <img className="git-logo" src={logo} alt="git logo"/>
        </a>
        <img className="git-logo" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACH0lEQVRoge3Wv2sTYRzH8fdzd60E6mBqEEsqSZPmirHVSdEpRCwi4o9BRFdnd/8Fd8cOTjo4iIKIrVXr4qg0Ktxx14hGpUpTQWwxyd3XpYVQ21qKkif4vNb7fuH74XvPwwOGYRiGYRiG8b9QnR5gPW5h6DGwuxWp8TAMv2ylx/rHM21XAjjo2DJVLKaTW2nQMkgUW+cUvAXGWs3e6dHRfbv+1KNlkCAIvjpNKQMecKjRsB8Ui8W+zXq0DALwulqdb0XqBPAOUUdbzeV76XQ6sVG9loe9XTGXy7dsZkAGUExGkXUmCIKfa+u03ciqN2EYoOKywDzCuGPFt0ulkrO2TvsgAJ5X9ZSScaAucP7zpw+3ALu9piuCAHhedTaW+BTwHeRCoTA0Qdv89sat+qnXv31MpZIzCBcVHO7vT/YvLCw+hJXD7haGpoFyR6fcvuueP3dtdTXS0VH+Au2v37VGRnLHJJZHQJ+gbvh+eBW6LMjwcOaIpawpYKfATd+fuwLE0EVBXDc7hqinQBLUHc8PLwHR6veuuH5dN+uKqEkgqeDu3oHBy7SFgC7YyFafKFoHyeVyg44tz4EM8OTHUuN0rVZbXq9W21/rQDa7x7FlCsig5IXTkzi7UQjQdCP5fD7lWPEzgf3Aq94drXKl8n5xs57fXpE6sCy5vxJi1ulpHK9UapuGAE2DKGRJIS+bkXXS82v1Ts9jGIZhGIZhGHr5BfM/sn94TLH3AAAAAElFTkSuQmCC"/>
      </div>
    </div>
        
  )
}

export default UserShort