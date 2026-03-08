// Pagina del chat
import datosJSON from "../datos.json";
import Chat from "../components/Chat";

function ChatPage() {

  // Procesa los datos del archivo JSON
  const datos = JSON.parse(
    JSON.stringify(datosJSON),
    (key, value) => value
  );

  return (
    <div>

      <h1>Recomendaciones</h1>

      <Chat datos={datos} />

    </div>
  );
}

export default ChatPage;