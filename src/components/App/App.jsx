//import App.css
import "./App.css";

//import 3 components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const search1 = {
  name:"ddd",
  artist:"ddd",
  album:"df"

}


const App = () => {
  
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
            <SearchResults search={search1}/>
            { /* <SearchPlaylist /> */ }
        </div>
      </div>
    </div>
  );
};

export default App;
