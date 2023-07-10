import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";

const isOddIndex = (number) => number % 2 !== 0;

const EventChip = ({ id, title, image, isSubscribed, onEventChange }) => (
  <Chip
    avatar={<Avatar alt="Natacha" src={image} />}
    label={title}
    variant="outlined"
    onDelete={() => onEventChange(id)}
    deleteIcon={isSubscribed ? <StarRateIcon /> : <StarBorderIcon />}
  />
);

const EventsList = ({ events, onEventsChange }) => {
  const theme = useTheme();

  return events.map((event, index) => (
    <Box
      sx={{
        my: theme.spacing(2),
        ml: isOddIndex(index) && theme.spacing(4),
        mr: !isOddIndex(index) && theme.spacing(4),
      }}
    >
      <EventChip
        key={event.id}
        onEventChange={onEventsChange}
        isSubscribed={Boolean(events.find(({ id }) => event.id === id))}
        {...event}
      />
    </Box>
  ));
};

export default EventsList;
