import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const GoogleCalendarEmbed = () => {
  return (
    <Box
      maxW="900px"
      mx="auto"
      my={4}
      p={4}
      borderRadius="lg"
      boxShadow="lg"
      bg="white"
    >
      <Heading as="h2" size="lg" mb={4}>
        Mój Kalendarz Google
      </Heading>
      <Text mb={4}>
        Sprawdź nadchodzące wydarzenia i zaplanuj swój dzień korzystając z
        Google Calendar.
      </Text>
      <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=UTC&bgcolor=%23ffffff&showTitle=0&showPrint=0&showTz=0&hl=pl&showCalendars=0&src=YmFydG9zenJlem1lcjIwQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=cGwucG9saXNoI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
        style={{ border: 0, borderRadius: "10px" }}
        width="100%"
        height="600"
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </Box>
  );
};

export default GoogleCalendarEmbed;
