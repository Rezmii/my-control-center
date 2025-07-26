import { Box, Flex, Heading } from "@chakra-ui/react";
import GoogleCalendarEmbeded from "./components/GoogleCalendarEmbeded";
import CalendarData from "./components/CalendarData";
import AppTimeData from "./components/AppTimeData";

export default function Home() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Centrum Sterowania
      </Heading>

      <Flex direction={{ base: "column", md: "row" }} gap={4}>
        <Box flex="1">
          <CalendarData />
        </Box>
        <Box flex="1">
          <GoogleCalendarEmbeded />
        </Box>
        <Box flex="1">
          <AppTimeData />
        </Box>
      </Flex>
    </Box>
  );
}