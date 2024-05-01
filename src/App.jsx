import "./App.css";
import Card from "./componentes/Card";
import Lenguajes from "./datos/lenguajes";

function App() {
  /* l es la variable que va a iterar e index es el key */
  const ListaLenguajes = Lenguajes.map((l, index) => {
    return <Card key={index} titulo={l.ntitulo} descripcion={l.ndescripcion} />;
  });

  return (
    <>
      <div className="app">
        <div className="appDos">
          <h1 className="marvel">Marvel Heroes</h1>
          <div className="container">{ListaLenguajes}</div>
        </div>
      </div>
    </>
  );
}

export default App;
