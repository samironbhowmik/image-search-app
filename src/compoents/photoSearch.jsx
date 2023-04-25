import React, { useState } from 'react'
import "../compoents/photoSearch.css"
import axios from 'axios'

function PhotoSearch() {

    const [search, setSearch] = useState("")
    const [list, setList] = useState([])
    const [bookmark, setBookmark] = useState([])

    const API_KEY = "bI8soWbQXsVt3jlOVX6mAOi0q6Lc8bVAggHtuO3oPGc"
    const API_URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}`

    const handleSearch = async(e)=>{
        e.preventDefault()
        // console.log("working");
        const result = await axios.get(`${API_URL}&q=${search}`)
        // console.log(search);
        console.log(result.data);
        setList(result.data)
    }
  return (
    <div>
        <div className="container">
            <div className="heading">
                <div className="left">
                    <h1>React Photo Search</h1>
                </div>
                <div className="right">
                    <button className='bookmark-btn'>Bookmarks</button>
                </div>
            </div>
            <form action="" className="input-form">
                <input className='search' type="text" placeholder='Search free high resolution images' onChange={(e)=>{setSearch(e.target.value)}} value={search}/>
                <button className='search-btn' onClick={handleSearch}>Search</button>
            </form>

            <div className="results">
                {list.map((item,id)=>{
                    return(
                        <div className='images' key={id}>
                            <img src={item.urls.small} alt="" />
                        </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default PhotoSearch