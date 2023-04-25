import Bookmark from "./compoents/bookmark";
import PhotoSearch from "./compoents/photoSearch";
import {BrowserRouter, Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PhotoSearch/>} />
          <Route path="/bookmark" element={<Bookmark/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
