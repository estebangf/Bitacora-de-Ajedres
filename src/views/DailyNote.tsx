import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied
} from "@mui/icons-material";
import Rating, { IconContainerProps } from '@mui/material/Rating';
import { styled, TextField, Typography } from "@mui/material";
import { useState } from "react";


const StyledRating = styled(Rating)(({ theme }) => ({
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: theme.palette.action.disabled,
  },
}));

const customIcons: {
  [index: string]: {
    icon: React.ReactElement;
    label: string;
    color: string;
  };
} = {
  1: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: 'Sentiment Very Dissatisfied',
    color: "error"
  },
  2: {
    icon: <SentimentVeryDissatisfied color="error" />,
    label: 'Sentiment Very Dissatisfied',
    color: "error"
  },
  3: {
    icon: <SentimentDissatisfied color="error" />,
    label: 'Sentiment Dissatisfied',
    color: "error"
  },
  4: {
    icon: <SentimentDissatisfied color="warning" />,
    label: 'Sentiment Dissatisfied',
    color: "warning"
  },
  5: {
    icon: <SentimentNeutral color="warning" />,
    label: 'Sentiment Neutral',
    color: "warning"
  },
  6: {
    icon: <SentimentSatisfied color="warning" />,
    label: 'Sentiment Satisfied',
    color: "warning"
  },
  7: {
    icon: <SentimentSatisfied color="success" />,
    label: 'Sentiment Satisfied',
    color: "success"
  },
  8: {
    icon: <SentimentSatisfiedAlt color="success" />,
    label: 'Sentiment Satisfied Alt',
    color: "success"
  },
  9: {
    icon: <SentimentVerySatisfied color="success" />,
    label: 'Sentiment Very Satisfied',
    color: "success"
  },
  10: {
    icon: <SentimentVerySatisfied color="success" />,
    label: 'Sentiment Very Satisfied',
    color: "success"
  },
};

function IconContainer(props: IconContainerProps) {
  const { value, ...other } = props;
  return <span {...other} style={{ margin: 4, display: 'flex', alignItems: 'center' }}>
    <Typography variant="caption" sx={{ color: '#00000042' }}>{value}. </Typography>
    {customIcons[value].icon}
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
      <Subtitle variant="h5">Tiempo Efectivo de estudio:</Subtitle>
      <Title variant="body1">Tiempo, recursos y cantidad de trabajo hecho en la sesion de entrenamiento de hoy</Title>
      <TextField variant="standard" fullWidth />
      <Subtitle variant="h5">¿Que fue la primera cosa que aprendiste hoy?</Subtitle>
      <TextField variant="standard" fullWidth />
      <Subtitle variant="h5">Puntuación del enfoque</Subtitle>
      <Title variant="body1">Califica tu enfoque de entrenamiento de hoy de 1 (horrible) a 10 (en el camino correcto)</Title>
      <StyledRating
        name="highlight-selected-only"
        // defaultValue={2}
        value={calification}
        IconContainerComponent={IconContainer}
        getLabelText={(value: number) => customIcons[value].label}
        max={10}
        highlightSelectedOnly
        onChange={(event, newValue) => {
          if (newValue)
            setCalification(newValue);
        }}
      />
      <Subtitle variant="h5">La unica cosa que puede hacerse para mejorar en enfoque mañana:</Subtitle>
      <Title variant="body1">¿Cuál fué el mayor problema con el enfoque hoy? ¡Hazlo mejor mañana!</Title>
      <TextField variant="standard" fullWidth />
    </div>
  )
}

export default DailyNote;