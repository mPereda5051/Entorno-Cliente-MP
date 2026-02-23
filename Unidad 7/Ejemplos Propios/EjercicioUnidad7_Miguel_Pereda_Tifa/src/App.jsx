import datosJSON from "../datos.json";

function App() {

  const datos = JSON.parse(
    JSON.stringify(datosJSON),
    (key, value) => {
      return value; 
    }
  );

  return (   
    <div>
      <h1>Asistente Virtual</h1>

      {datos.map((item) => (  
        <div key={item.id}>
          <p>Usuario: {item.usuario}</p>
          <p>Asistente: {item.respuesta}</p>
          <hr />
        </div>
      ))}

    </div>
  );
}

export default App;