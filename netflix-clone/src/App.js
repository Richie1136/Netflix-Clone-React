import './App.css';
import requests from './request'
import Row from './components/row/Row';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Row title='Netflix Originals' fetchUrl={requests.fetchNetflixOriginals} />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;