import './App.css';
import requests from './request'
import Row from './components/row/Row';
import Banner from './components/banner/Banner';
import NavBar from './components/navbar/NavBar';


function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row title='Netflix Originals' isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;