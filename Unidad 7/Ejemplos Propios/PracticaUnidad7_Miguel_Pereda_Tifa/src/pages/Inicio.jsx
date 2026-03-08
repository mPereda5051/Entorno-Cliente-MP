// Página de inicio, contiene un boton que te envia a la pagina principal que es el chat.
import { Link } from "react-router-dom";

function Inicio() {
  return (
    <div>
      <h1>Asistente de Videojuegos</h1>

      <p>Te ayudaré a encontrar un juego.</p>

      <Link to="/chat">
        <button>Empezar chat</button>
      </Link>

    </div>
  );
}

export default Inicio;