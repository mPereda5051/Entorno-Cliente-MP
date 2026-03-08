// Componente que contiene el los contenedores que simulan la conversacion entre el usuario y el asistente asi como sus estilos.
function Mensaje({ item }) {

    return (
        <div>

            <div style={{ background: "#2a2a2a", padding: "10px", margin: "10px", borderRadius: "8px" }}>
                <p><b>Usuario:</b> {item.usuario}</p>
            </div>

            <div style={{ background: "#444", padding: "10px", margin: "10px", borderRadius: "8px" }}>
                <p><b>Asistente:</b> {item.respuesta}</p>
            </div>

            <p>Categoría: {item.categoria}</p>

            <hr />

        </div>
    );
}

export default Mensaje;