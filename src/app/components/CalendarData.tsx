"use client";

import { useEffect, useState } from "react";
import { Box, List, ListItem, Text, Heading } from "@chakra-ui/react";

interface CalendarEvent {
  start: {
    dateTime?: string;
    date?: string;
  };
  end?: {
    dateTime?: string;
    date?: string;
  };
  summary: string;
}

export default function CalendarData() {
  const [events, setEvents] = useState<CalendarEvent[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("/api/calendar");
        const data = await res.json();
        console.log(data);
        setEvents(data);
      } catch (error) {
        console.error("Error fetching calendar events:", error);
      }
    };

    fetchEvents();
  }, []);

  const formatEventDate = (
    startDateTime?: string,
    startDate?: string,
    endDateTime?: string
  ) => {
    const daysOfWeek = [
      "niedziela",
      "poniedziałek",
      "wtorek",
      "środa",
      "czwartek",
      "piątek",
      "sobota",
    ];

    if (startDateTime) {
      const start = new Date(startDateTime);
      const end = endDateTime ? new Date(endDateTime) : null;
      const day = start.getDate().toString().padStart(2, "0");
      const month = (start.getMonth() + 1).toString().padStart(2, "0");
      const dayOfWeek = daysOfWeek[start.getDay()];

      const hoursStart = start.getHours().toString().padStart(2, "0");
      const minutesStart = start.getMinutes().toString().padStart(2, "0");

      let timeString = `${hoursStart}:${minutesStart}`;

      if (end) {
        const hoursEnd = end.getHours().toString().padStart(2, "0");
        const minutesEnd = end.getMinutes().toString().padStart(2, "0");
        timeString += `-${hoursEnd}:${minutesEnd}`;
      }

      return `${day}.${month} (${dayOfWeek}), ${timeString}`;
    } else if (startDate) {
      const start = new Date(startDate);
      const day = start.getDate().toString().padStart(2, "0");
      const month = (start.getMonth() + 1).toString().padStart(2, "0");
      const dayOfWeek = daysOfWeek[start.getDay()];

      return `${day}.${month} (${dayOfWeek})`;
    }

    return "Nieznana data";
  };

  return (
    <Box mt={4}>
      <Heading as="h2" fontSize="xl" mb={4}>
        Nadchodzące wydarzenia w tym tygodniu:
      </Heading>
      {events.length > 0 ? (
        <List spacing={3}>
          {events.map((event, index) => (
            <ListItem
              key={index}
              border="1px solid #e2e8f0"
              borderRadius="md"
              p={4}
              _hover={{ bg: "gray.100" }}
              maxW="600px"
            >
              <Text fontWeight="bold">
                {event.summary.includes("święto") && <span>🎉 </span>}
                {event.summary.charAt(0).toUpperCase() + event.summary.slice(1)}
              </Text>
              <Text>
                {formatEventDate(
                  event.start.dateTime,
                  event.start.date,
                  event.end?.dateTime
                )}
              </Text>
            </ListItem>
          ))}
        </List>
      ) : (
        <Text>W tym tygodniu nie masz żadnych wydarzeń</Text>
      )}
    </Box>
  );
}
