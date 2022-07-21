//import App.css
import "./App.css";

//import 3 components
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";

const App = () => {
  // const [Search, setSearch] = useState(
      
  //         {name: 'name1',artist:'artist1',album:'album1',id:' id'},
  //         {name: 'name1',artist:'artist1',album:'album1',id:' id'},
  //         {name: 'name1',artist:'artist1',album:'album1',id:' id'}]
  //       );
  // }
  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
            <SearchResults />
            {/*searchresult={this.state.searchResults}*/}
            { /* <SearchPlaylist /> */ }
        </div>
        
      </div>
    </div>
  );
};

export default App;
