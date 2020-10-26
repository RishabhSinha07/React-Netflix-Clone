import logo from './logo.svg';
import './App.css';
import Row from "./Row"
import requests from './requests'
import Banner from "./Banner"
import Nav from "./Nav"

function App() {
  return (
    <div className="App">
      {/* NAV */}
      <Nav/>
      <Banner/>
      <Row title = "NETFLIX ORIGINAL" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
      <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
      <Row title = "Horror Movies" fetchUrl={requests.fetchHorroeMovies}/>
      <Row title = "Romantic Movies Now" fetchUrl={requests.fetchRomanceMovies}/>
      
    </div>
  );
}

export default App;
