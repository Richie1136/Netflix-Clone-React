import { useState, useEffect } from 'react'
import axios from '../../axios'

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


  console.log(movies)


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {/* row-poster */}
      </div>
      {movies.map(movie => {
        return (
          <img src={movie.poster_path} alt={movie.name} />
        )
      })}
    </div>
  )
}

export default Row
