import {
  SentimentVeryDissatisfied,
  SentimentDissatisfied,
  SentimentNeutral,
  SentimentSatisfied,
  SentimentSatisfiedAlt,
  SentimentVerySatisfied
} from "@mui/icons-material";
import React from "react";

const SentimentIcons: {
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

export default SentimentIcons