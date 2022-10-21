import { Add } from "@mui/icons-material";
import { Fab, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function DailyNotesList() {

  return (
    <div>
      <Typography variant="h4">Lista de Notas Diarias</Typography>
      <Link style={{
        position: 'absolute',
        right: 16,
        bottom: 16
      }} to="new">
        <Fab color="primary">
          <Add />
        </Fab>
      </Link>
    </div>
  )
}

export default DailyNotesList;