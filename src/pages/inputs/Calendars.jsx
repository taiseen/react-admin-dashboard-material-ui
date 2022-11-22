import FullCalendar, { formatDate } from '@fullcalendar/react'; // calender component
import dayGridPlugin from '@fullcalendar/daygrid'; // plugins...
import timeGridPlugin from '@fullcalendar/timegrid'; // plugins...
import interactionPlugin from '@fullcalendar/interaction'; // plugins...
import listPlugin from "@fullcalendar/list"; // plugins...
import { Box, List, ListItem, ListItemText, Typography, useTheme } from "@mui/material";
import { tokens } from "../../styles/theme";
import { Header } from "../../components";
import { useState } from "react";


const Calendars = () => {

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);


  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete the event '${selected.event.title}'`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="20px">

      <Header title="Calendar" subtitle="Full Calendar Interactive Page" />

      <Box display="flex" justifyContent="space-between">

        {/* CALENDAR SIDEBAR */}
        <Box
          p="15px"
          flex="1 1 20%"
          borderRadius="4px"
          backgroundColor={colors.primary[400]}
        >
          <Typography variant="h5">Events</Typography>

          <List>
            {
              currentEvents.map((event) => (
                <ListItem
                  key={event.id}
                  sx={{
                    margin: "10px 0",
                    borderRadius: "2px",
                    backgroundColor: colors.greenAccent[500],
                  }}
                >
                  <ListItemText
                    primary={event.title}
                    secondary={
                      <Typography>
                        {formatDate(event.start, {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </Typography>
                    }
                  />
                </ListItem>
              ))
            }
          </List>
        </Box>


        {/* 📆📅📆📅📆📅📆📅📆📅📆📅 CALENDAR 📆📅📆📅📆📅📆📅📆📅📆📅 */}
        <Box flex="1 1 100%" ml="15px">

          <FullCalendar
            height="75vh"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={handleDateClick}
            initialView="dayGridMonth"
            eventClick={handleEventClick}
            eventsSet={events => setCurrentEvents(events)}
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin,
            ]}
            initialEvents={[
              {
                id: "12315",
                title: "All-day event",
                date: "2022-09-14",
              },
              {
                id: "5123",
                title: "Timed event",
                date: "2022-09-28",
              },
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
            }}
          />

        </Box>
      </Box>

    </Box>
  );
};

export default Calendars;