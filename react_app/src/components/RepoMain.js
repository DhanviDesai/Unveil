import React, {useState, useEffect} from 'react'
import UserInformation from './UserInformation'
import RepoInformation from './RepoInformation'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

function RepoMain({_id, name, username, repo_count, avatar_url, followers, following, backClick}) {

    const [repos, setRepos] = useState([])

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

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

    const languageMap = {}

    const returnRepos = []
    repos.forEach((repo, i) => {
        if(repo["language"] !== undefined && repo["language"] !== null){
            if(repo["language"] in languageMap){
                languageMap[repo["language"]] = languageMap[repo["language"]] + 1
            }else{
                languageMap[repo["language"]] = 1
            }
        }
        returnRepos.push(<RepoInformation key={i} repo_name={repo["repo_name"]} repo_language={repo["language"]} stargazers_count={repo["stargazers_count"]} forks_count={repo["forks_count"]} />)
    });

    const labels = []
    const values = []

    for(const [key,value] of Object.entries(languageMap)){
        labels.push(key)
        values.push(value)
    }

    const data = {
      labels,
      datasets: [
        {
          label: 'Repositories',
          data: values,
          backgroundColor: 'rgba(205, 92, 92,0.5)',
        },
      ],
    };

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
                    <Bar options={options} data={data} />
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