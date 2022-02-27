import React, {useState, useEffect} from 'react'
import UserInformation from './UserInformation'
import RepoInformation from './RepoInformation'

function RepoMain({_id, name, username, repo_count, avatar_url, followers, following, backClick}) {

    const [repos, setRepos] = useState([])

    useEffect(() => {
        fetchRepos().then((repos) => {
            setRepos(repos)
        }).catch((error) => {
            alert(error)
        })
    },[username])

    const fetchRepos = async () => {
        let response = await fetch("/user/repos/"+_id)
        let repos = await response.json()
        return repos
    }

    const handleBackClick = () => {
        backClick()
    }

    const returnRepos = []
    repos.forEach(repo => {
        returnRepos.push(<RepoInformation repo_name={repo["repo_name"]} repo_language={repo["language"]} stargazers_count={repo["stargazers_count"]} forks_count={repo["forks_count"]} />)
    });

  return (
    <div>
        <div className="top-bar">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAA5klEQVRoge3XoUpFQRQF0PUUBE3CSybBaDNYzf6WzR8w+AEWs1lQEVT8AptgsojBYHqG8YJomxcODnvBLZP2hpm5Z4iIiIiIiL/muMVVdZBlbOIRC9wXZ+m2gWutxBO2auP0WcelVuIZ27Vx+qzhQivxgp3aOH1Wca6VeMVubZw+KzjTSrxhrzZOnxlOtRLv2K+N02eGE63EBw5q4/Q71kp84rA4S7cjrcR//G5oB/u/W/xeGGJrMdBhZ5DrdzLED3EyxIgyGWJonAwxxk+GeFhNfj51H4qzLG2OO98jQUREREREVPkCrPhkyEC6TtEAAAAASUVORK5CYII=" onClick={handleBackClick}/>
        </div>
        <div className='main-body'>
            <div className='repo-user-details'>
                <div className='user-information'>
                    <UserInformation name={name} username={username} repo_count={repo_count} avatar_url={avatar_url} followers={followers} following={following} avatar_class_name="repo-user-avatar" />
                </div>
                <div className="user-activity">
                    <img src={"https://ghchart.rshah.org/"+username} alt="username's Github chart" />
                </div>
                <div className='repos-list'>
                    {returnRepos}
                </div>
            </div>
        </div>
    </div>
  )
}

export default RepoMain