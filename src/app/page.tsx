import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import GoogleCalendarEmbeded from "./components/GoogleCalendarEmbeded";
import CalendarData from "./components/CalendarData";

export default function Home() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Centrum Sterowania
      </Heading>

      <CalendarData />

      <GoogleCalendarEmbeded />
    </Box>
  );
}
