import { useState, useEffect } from 'react'
import axios from '../../axios'
import requests from '../../request'
import './Banner.css'

const Banner = ({ title }) => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
      return request
    }
    fetchData()
  }, [])

  return (
    <header className='banner' style={{ backgroundSize: "cover", backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`, backgroundPosition: "center center" }}>
      <div className='banner-content'>
        <h1>{movie?.title || movie.name || movie.original_name}</h1>
        {/* title */}
        {/* div 2 buttons */}
        <p>{movie.overview}</p>
        {/* description */}
      </div>
    </header>
  )
}

export default Banner
