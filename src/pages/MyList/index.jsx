import { useEffect, useState } from 'react';
import './mylist.css';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'
import { AiFillDelete } from 'react-icons/ai';

const MyList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {

    const myList = localStorage.getItem("@12movies");
    setMovies(JSON.parse(myList) || []);

  }, [])

  function deleteMovie(id){
    let filterMovies = movies.filter((item) => {
      return (item.id !== id)
    })

    setMovies(filterMovies);
    localStorage.setItem("@12movies", JSON.stringify(filterMovies))
    toast.success('Filme removido com sucesso.');
  }

  return (
    <main className="main-mylist">
      <h1 className="title-mylist">Minha Lista</h1>
      <div className="movies-container">
        {movies.length === 0 && <div className="message-list">Você não possui nenhum filme salvo.</div>}
      <ul>
          {movies.map((item) => {
            return(
              <li key={item.id} className="movie-li">
                <Link to={`/filme/${item.id}`}>
                  <div className="infos">
                    <img className='img-movie' src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                    <h2 className="movie-title-list">{item.title}</h2>
                  </div>
                </Link>
                <div className="options">
                  <Link to={`/filme/${item.id}`} className='details-list'>
                    Detalhes
                  </Link>
                  <div onClick={() => deleteMovie(item.id)} className='delete-icon'>
                    <AiFillDelete size={22} />
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}

export default MyList;