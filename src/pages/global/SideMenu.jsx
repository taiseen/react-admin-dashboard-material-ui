import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { sideMenu } from '../../constants/sideMenu';
import { tokens } from "../../styles/theme";
import { useState } from "react";
import Item from "./Item";


const SideMenu = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <Box
    // sx={{
    //   "& .pro-sidebar-inner": {
    //     background: `${colors.primary[400]} !important`,
    //   },
    //   "& .pro-icon-wrapper": {
    //     backgroundColor: "transparent !important",
    //   },
    //   "& .pro-inner-item": {
    //     padding: "5px 35px 5px 20px !important",
    //   },
    //   "& .pro-inner-item:hover": {
    //     color: "#868dfb !important",
    //   },
    //   "& .pro-menu-item.active": {
    //     color: "#6870fa !important",
    //   },
    // }}
    >
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
      >

        <Menu iconShape="square">

          {/* LOGO AND MENU ICON */}
          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {
              !isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h3" color={colors.grey[100]}>
                    ADMIN
                  </Typography>
                  <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              )
            }
          </MenuItem>

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          {
            !isCollapsed && (
              <Box mb="25px">

                <Box display="flex" justifyContent="center" alignItems="center">
                  <img
                    alt="profile-user"
                    width="100px"
                    height="100px"
                    src={`../../alex.jpg`}
                    style={{ cursor: "pointer", borderRadius: "50%" }}
                  />
                </Box>

                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    fontWeight="bold"
                    color={colors.grey[100]}
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Alex
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Main Admin
                  </Typography>
                </Box>

              </Box>
            )
          }

          {/* 🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧🟧 */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>

            {
              // console.log(menu);
              sideMenu.map(menu =>
                menu.tag === 'divider'
                  ?
                  <Typography
                    key={menu.title}
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{ m: "15px 0 5px 20px" }}
                  >
                    {menu.title}
                  </Typography>
                  :
                  <Item
                    key={menu.title}
                    menu={menu}
                    selected={selected}
                    setSelected={setSelected}
                  />
              )
            }
          </Box>

        </Menu>

      </Sidebar>
    </Box>
  );
};

export default SideMenu;