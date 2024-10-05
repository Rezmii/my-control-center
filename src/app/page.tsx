import { Box, Grid, Heading, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box p={5}>
      <Heading as="h1" mb={6}>
        Centrum Sterowania
      </Heading>

      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Projekty</Heading>
          <Text mt={4}>Przeglądaj i zarządzaj projektami.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Linki do Dysków</Heading>
          <Text mt={4}>Szybki dostęp do dysków.</Text>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Przypomnienia</Heading>
          <Text mt={4}>Zarządzaj przypomnieniami i zadaniami.</Text>
        </Box>
      </Grid>
    </Box>
  );
}
