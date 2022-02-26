import React from 'react'
import '../App.css'

function Header() {
  return (
    <div className="search-wrapper">
        <h1 className="title">Unveil</h1>
        <div className='search-div'>
          <button className="search-button"/>
          <input className="search-bar" type="text" placeholder="Search user" />
        </div>
      </div>
  )
}

export default Header