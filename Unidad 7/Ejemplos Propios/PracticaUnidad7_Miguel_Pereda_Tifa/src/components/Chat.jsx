// Importacion de componentes
import { useState, useEffect } from "react";
import Mensaje from "./Mensaje";
import Input from "./Input";

function Chat({ datos }) {

  //Mensaje actual que se debe mostrar.
  const [indice, setIndice] = useState(0);
  //Historial de mensajes visibles.
  const [mensaje, setMensaje] = useState([]);

  // Efecto que se ejecuta cada vez que el índice cambia para añadir un nuevo mensaje al historial.
  useEffect(() => {
    if (indice < datos.length) {
      setMensaje((prev) => {

        // Verificación para no añadir el mismo mensaje si ya es el último en la lista.
        if (prev.length > 0 && prev[prev.length - 1].id === datos[indice].id) {
          return prev;
        }

        // Añade el nuevo mensaje de los datos al array de mensajes acumulados.
        return [...prev, datos[indice]];
      });
    }
  }, [indice]);

  // Función que incrementa el índice.
  function siguiente() {
    if (indice < datos.length - 1) {
      setIndice(indice + 1);
    }
  }
  /* Muestra todos los mensajes almacenados en el estado actual y si quieres continuar */

  return (
    <div>


      {mensaje.map((item) => (
        <Mensaje key={item.id} item={item} />
      ))}


      <Input siguiente={siguiente} />

    </div>
  );
}

export default Chat;