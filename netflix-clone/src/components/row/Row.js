import { useState, useEffect } from 'react'
import axios from '../../axios'
import './Row.css'

const baseurl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {

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
        {movies.map(movie => (
          <img key={movie.id} className={`row-poster ${isLargeRow && 'row-posterLarge'}`} src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
    </div>
  )
}

export default Row
