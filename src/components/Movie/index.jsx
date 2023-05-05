import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { APIKey } from '../../services/api';
import { toast } from 'react-toastify';

import './movie.css';

function MoviePage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const image_path = 'https://image.tmdb.org/t/p/w500';
  const [movie, setMovie] = useState({});
  
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}}?api_key=${APIKey}&language=pt-BR`)
      .then(response => response.json())
      .then(data => setMovie(data))
      .catch(()=>{
        navigate("/", { replace: true });
        return;
      })

  })

  function saveMovie(){
    const myList = localStorage.getItem("@12movies");
    let savedMovies = JSON.parse(myList) || [];
    const hasFilme = savedMovies.some( (savedMovie) => savedMovie.id === movie.id);

    if(hasFilme){
      toast.warn("Esse filme já está na sua lista!")
      console.log('já existe');
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@12movies", JSON.stringify(savedMovies));
    toast.success('Filme salvo com sucesso!');
    console.log('salvo');
  }

  return (
    <main className='main-movie'>
        <div className="container-movie-img">
            <img className="movie-img" src={`${image_path}${movie.poster_path}`} alt={movie.title} />
        </div>
        <div className="info-movie">
          <h1 className="movie-title">{movie.title}</h1>
          <span className="movie-rate">{(Math.round(movie.vote_average * 100) / 100).toFixed(1)} / 10</span>
          <p className="sinopse">{movie.overview}</p>
          <div className="container-btns">
            <a href={`https://youtube.com/results?search_query=${movie.title}`} target='blank'><button className='button-trailer'>Assista ao trailer</button></a>
            <button onClick={saveMovie} className="save-movie">Salvar</button>
          </div>
        </div>
    </main>
  )
}

export default MoviePage;