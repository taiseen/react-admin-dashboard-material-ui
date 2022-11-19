import { Typography, useTheme } from "@mui/material";
import { MenuItem } from "react-pro-sidebar";
import { tokens } from "../../styles/theme";
import { Link } from "react-router-dom";

const Item = ({ menu, selected, setSelected }) => {

    const themes = useTheme();
    const color = tokens(themes.palette.mode);

    return (

        <Link to={menu.path} style={{ backgroundHover: color.primary[700] }}>
            <MenuItem
                icon={<menu.icon />}
                active={selected === menu.title}
                onClick={() => setSelected(menu.title)}
                style={{
                    color: color.primary[100],
                    // padding: "5px 35px 5px 20px",
                    // background: color.primary[600]
                }}
            >
                <Typography>
                    {menu.title}
                </Typography>

            </MenuItem>
        </Link >
    );
};

export default Item