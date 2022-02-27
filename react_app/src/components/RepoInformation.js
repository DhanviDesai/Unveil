import React, {useRef} from 'react'

function RepoInformation({repo_name, repo_language, stargazers_count, forks_count}) {    

  return (
    <div className='repo-outer-wrapper'>
        <span className='repo-name'>{repo_name}</span>
        <span className='repo-language'>{repo_language}</span>
        <div className='repo-details'>
            <span><strong className='bold'>{stargazers_count}</strong> stargazers</span>
            ·
            <span><strong className='bold'>{forks_count}</strong> forks</span>
        </div>
    </div>
  )
}

export default RepoInformation