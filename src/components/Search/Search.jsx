import React from 'react'
import "./search.scss"
const Search = () => {
    return (
        <div className="search">
            <div>
                <img className='picture' src='https://cdn-icons-png.flaticon.com/512/54/54481.png' alt="img" />
                <input type="search" placeholder="Search"/>
            </div>
        </div>
    )
}

export default Search
