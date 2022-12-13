import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { mockDataContacts } from "../../constants/mockData";
import { useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Header } from "../../components";
import { Box } from "@mui/material";
import contactsColumns from "../../constants/contactsColumns";


const Contacts = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  
  // row - columns --> data display...
  return (
    <Box m="20px">

      <Header title="CONTACTS" subtitle="List of Contacts for Future Reference" />

      <Box
        m="40px 0 0 0"
        height="75vh"
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
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          // 🟧🟧🟧 data filter tool-bar present here 🟧🟧🟧
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >

        <DataGrid
          rows={mockDataContacts}
          columns={contactsColumns}
          components={{ Toolbar: GridToolbar }}
        />

      </Box>
    </Box>
  );
};

export default Contacts;