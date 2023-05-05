import { useEffect, useState} from 'react';
import { APIKey } from '../../services/api';
import { Link } from 'react-router-dom';
import './home.css';
import { AiFillStar } from 'react-icons/ai';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKey}&language=pt-BR&page=1`)
      .then(response => response.json())
      .then(data => setMovies(data.results))

  }, [])

  return (
    <main>
      <h1 className='title-home'>Filmes em cartaz</h1>
      <div className="catalogue">
        {
          movies.map((movie) => {
            return (
              <div key={movie.id} className="movie">
                <Link to={`filme/${movie.id}`}>
                  <div className="poster">
                    <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt={movie.title} className='movie-img'/>
                  <div className="details">
                    <h2>{movie.title}</h2>
                    <div className="rate">
                      <AiFillStar className='star-rate' color='yellow'/>
                      <span>{movie.vote_average}</span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </main>
  )
}

export default Home;