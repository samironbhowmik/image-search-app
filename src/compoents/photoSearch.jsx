import React, { useState } from 'react'
import "../compoents/photoSearch.css"
import axios from 'axios'
import { Link } from 'react-router-dom'

function PhotoSearch() {

    const [search, setSearch] = useState("")
    const [list, setList] = useState([])
    const [bookmark, setBookmark] = useState([])

    const API_KEY = "bI8soWbQXsVt3jlOVX6mAOi0q6Lc8bVAggHtuO3oPGc"

    const handleSearch = async(e)=>{
        e.preventDefault()
        // console.log("working");
        const result = await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${search}&client_id=${API_KEY}`)
        // console.log(search);
        console.log(result.data.results);
        setList(result.data.results)
    }

  return (
    <div>
        <div className="container">
            <div className="heading">
                <div className="left">
                    <h1>React Photo Search</h1>
                </div>
                <div className="right">
                    <Link to="/bookmark ">
                    <button className='bookmark-btn'>Bookmarks</button>
                    </Link>
                </div>
            </div>
            <form action="" className="input-form">
                <input className='search' type="text" placeholder='Search free high resolution images' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
                <button className='search-btn' onClick={handleSearch}>Search</button>
            </form>

            <div className="results">
                {list?.map((item,id)=>{
                    return(
                        <div className='images' key={id}>
                            <img src={item.urls.small} alt="" />
                            {/* <button>Bookmark</button> */}
                        </div>
                    )
                })}
            </div>

        </div>
    </div>
  )
}

export default PhotoSearch