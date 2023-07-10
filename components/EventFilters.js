import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Chip, Typography } from "@mui/material";

const EventFilters = ({ categories, onSelectCategory }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: theme.spacing(2),
        my: theme.spacing(2),
      }}
    >
      <Typography variant="subtitle2" fontWeight="bold">
        Sort By:
      </Typography>
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          size="small"
          variant="outlined"
          onClick={() => onSelectCategory(category)}
        />
      ))}
    </Box>
  );
};

export default EventFilters;
