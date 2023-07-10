import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Chip } from "@mui/material";

const EventCard = ({ id, title, description, startDate, image }) => {
  const theme = useTheme();

  return (
    <Card sx={{ display: "flex", my: theme.spacing(3) }}>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt="Live from space album cover"
      />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h5">
            {title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {description}
          </Typography>
        </CardContent>
        <Box sx={{ display: "flex", justifyContent: "flex-end", pl: 1, pb: 1 }}>
          <Chip sx={{ justifyContent: "flex-end" }} label={startDate} />
        </Box>
      </Box>
    </Card>
  );
};

export default EventCard;
