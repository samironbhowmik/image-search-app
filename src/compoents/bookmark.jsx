import React, { useState, useEffect } from "react";
import "../compoents/bookmark.css"
function Bookmark() {
  const [bookmarkList, setBookmarkList] = useState([]);

  useEffect(() => {
    const bookmarkData = JSON.parse(localStorage.getItem("bookmark")) || [];
    setBookmarkList(bookmarkData);
  }, []);

  return (
    <div>
      <div className="bookmark-container">
        <h1 className="heading">Bookmarks</h1>
        <div className="bookmark-results">
          {bookmarkList?.map((item, id) => {
            return (
              <div className="images" key={id}>
                <img src={item.urls.small} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Bookmark;
