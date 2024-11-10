import { Box, Heading, Grid, VStack } from "@chakra-ui/react";
import GoogleCalendarEmbeded from "./components/GoogleCalendarEmbeded";
import CalendarData from "./components/CalendarData";
import NotesData from "./components/NotesData";
import AppTimeData from "./components/AppTimeData";

export default function Home() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Centrum Sterowania
      </Heading>

      <Grid templateColumns={{ base: "1fr", md: "1fr 2fr" }} gap={4}>
        {/* Lewa kolumna z trzema komponentami jeden pod drugim */}
        <VStack align="stretch" spacing={4}>
          <Box>
            <CalendarData />
          </Box>
          <Box>
            <NotesData />
          </Box>
          {/* <Box>
            <AppTimeData />
          </Box> */}
        </VStack>

        {/* Prawa kolumna z osadzonym kalendarzem */}
        <Box>
          <GoogleCalendarEmbeded />
        </Box>
      </Grid>
    </Box>
  );
}
