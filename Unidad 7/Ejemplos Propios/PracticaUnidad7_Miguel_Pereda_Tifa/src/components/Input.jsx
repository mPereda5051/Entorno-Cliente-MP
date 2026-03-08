//Permite al usuario decidir si quiere continuar.
function InputUsuario({ siguiente }) {

  return (
    <div>

      <p>¿Quieres otra recomendación?</p>

      <button onClick={siguiente}>
        Sí
      </button>

      <button>
        No
      </button>

    </div>
  );
}

export default InputUsuario;