import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { faq } from '../../constants/faq';
import { Header } from "../../components";


const FAQ = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      {
        faq.map(({ id, question, answer }) =>

          id === 1 // by default 1st Accordion open...
            ? (
              <Accordion key={id} defaultExpanded>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">{question}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{answer}</Typography>
                </AccordionDetails>

              </Accordion>
            ) : (
              <Accordion key={id}>

                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography color={colors.greenAccent[500]} variant="h5">{question}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                  <Typography>{answer}</Typography>
                </AccordionDetails>

              </Accordion>
            )
        )
      }
    </Box>
  );
};

export default FAQ;