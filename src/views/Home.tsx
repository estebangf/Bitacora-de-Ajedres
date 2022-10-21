import { Checkbox } from "@mui/material";

function Home() {

  return (
    <div>
      <h4>Inicio</h4>
      <h5>Proceso de desarrollo</h5>
      <ul>
        <Checkbox checked={false} />Inicio<br />
        <Checkbox checked={false} />Consultar Bitácora<br />
        <Checkbox checked={false} />Planeamiento Semanal<br />
        <Checkbox checked={false} indeterminate />Notas Diarias<br />
        <Checkbox checked={false} />Revision Semanal<br />
        <Checkbox checked={false} />Como usar<br />
        <Checkbox checked={false} />Perfil<br />
        <Checkbox checked={false} />Opciones<br />
      </ul>
    </div>
  )
}

export default Home;