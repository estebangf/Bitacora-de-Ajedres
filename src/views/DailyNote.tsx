import Rating, { IconContainerProps } from '@mui/material/Rating';
import { Box, styled, TextField, Typography } from "@mui/material";
import { useState } from "react";
import SentimentIcons from '../components/SentimentIcons';

const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other} style={{
    margin: 4,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  }}>
    <Typography variant="body1" sx={{ color: '#0000005c' }}>{value}</Typography>
    {SentimentIcons[value].icon}
  </span>;
}

const Title = styled(Typography)({
  marginTop: 10,
  marginBottom: 6
})

const Subtitle = styled(Typography)({
  marginTop: 8,
  marginBottom: 4
})

function DailyNote() {
  const [calification, setCalification] = useState(0)

  return (
    <div>
      <Title variant="h4">Nota Diaria</Title>
      <Subtitle variant="h5">Tiempo Efectivo de estudio</Subtitle>
      <Title variant="body1">Tiempo, recursos y cantidad de trabajo hecho en la sesion de entrenamiento de hoy</Title>
      <TextField multiline variant="standard" fullWidth />
      <Subtitle variant="h5">¿Que fue la primera cosa que aprendiste hoy?</Subtitle>
      <TextField multiline variant="standard" fullWidth />
      <Subtitle variant="h5">Puntuación del enfoque</Subtitle>
      <Title variant="body1">Califica tu enfoque de entrenamiento de hoy de 1 (horrible) a 10 (en el camino correcto)</Title>
      <Box sx={{ overflowX: 'auto', overflowY: 'hidden' }}>
        <StyledRating
          name="highlight-selected-only"
          // defaultValue={2}
          value={calification}
          IconContainerComponent={IconContainer}
          getLabelText={(value: number) => SentimentIcons[value].label}
          max={10}
          highlightSelectedOnly
          onChange={(event, newValue) => {
            if (newValue)
              setCalification(newValue);
          }}
        />
      </Box>
      <Subtitle variant="h5">La unica cosa que puede hacerse para mejorar en enfoque mañana</Subtitle>
      <Title variant="body1">¿Cuál fué el mayor problema con el enfoque hoy? ¡Hazlo mejor mañana!</Title>
      <TextField multiline variant="standard" fullWidth />
    </div>
  )
}

export default DailyNote;