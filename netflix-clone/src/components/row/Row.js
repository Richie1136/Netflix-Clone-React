import { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'

const baseurl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl }) => {

  const [movies, setMovies] = useState([])

  // snippet of code which runs on a specific condition/variable

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {/* row-poster */}
        {movies.map(movie => (
          <img className='row-poster' src={`${baseurl}${movie.poster_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row
