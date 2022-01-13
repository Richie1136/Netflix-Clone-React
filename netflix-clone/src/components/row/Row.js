import movieTrailer from 'movie-trailer'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from '../../axios'
import './Row.css'

const baseurl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {

  const [movies, setMovies] = useState([])

  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])


  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.name || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        }).catch(error => {
          console.log(error)
        })
    }
  }

  const opts = {
    height: "390",
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }


  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row-posters'>
        {movies.map(movie => (
          <img onClick={() => handleClick(movie)} key={movie.id} className={`row-poster ${isLargeRow && 'row-posterLarge'}`} src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row
