import { mockDataTeam } from "../../constants/mockData";
import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../styles/theme";
import { Header } from "../../components";
import teamColumns from "../../constants/teamColumns";


const Team = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);


  // row - columns --> data display...
  return (
    <Box m="20px">

      <Header title="TEAM" subtitle="Managing the Team Members" />

      <Box
        m="40px 0 0 0"
        height="70vh"
        // custom css for material ui
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            backgroundColor: colors.blueAccent[700],
            borderTop: "none",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >

        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={teamColumns(colors)}
        />

      </Box>
    </Box>
  );
};

export default Team;