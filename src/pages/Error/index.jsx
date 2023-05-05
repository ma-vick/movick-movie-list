import { Link } from "react-router-dom";
import './error.css';

const Error = () => {
  return (
    <main className="main-error">
      <h1>Eitaaa!</h1>
      <p>Sinto muito, ocorreu um erro.</p>
      <Link to="/"><button className="button-error">voltar para o início</button></Link>
    </main>
  )
}

export default Error;