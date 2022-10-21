function Home() {

  return (
    <div>
      <h4>Inicio</h4>
      <h5>Proceso de desarrollo</h5>
      <ul>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Inicio</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Consultar Bitácora</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Planeamiento Semanal</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Notas Diarias</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Revision Semanal</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Como usar</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Perfil</li>
        <li style={{ listStyle: "none" }}><input type='checkbox' checked={false} />Opciones</li>
      </ul>
    </div>
  )
}

export default Home;