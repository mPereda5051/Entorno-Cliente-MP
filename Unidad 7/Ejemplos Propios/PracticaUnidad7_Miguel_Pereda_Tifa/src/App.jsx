// Componente principal que gestiona el enrutamiento de la aplicación.
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <BrowserRouter>

      {/* Definición de las rutas disponibles en la aplicación */}
      <Routes>
        {/* Ruta raíz que carga la página de inicio */}
        <Route path="/" element={<Inicio />} />
        {/* Ruta que carga la página del chat interactivo */}
        <Route path="/chat" element={<ChatPage />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;