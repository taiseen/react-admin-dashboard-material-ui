import { GeographyChart, Header } from "../../components";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";

const Geography = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">

      <Header title="Geography" subtitle="Simple Geography Chart" />

      <Box
        height="75vh"
        borderRadius="4px"
        border={`1px solid ${colors.grey[100]}`}
      >
        <GeographyChart />
      </Box>

    </Box>
  );
};

export default Geography;