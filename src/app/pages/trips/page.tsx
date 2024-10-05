"use client"; // Upewnij się, że dodajesz ten nagłówek na początku pliku

import {
  Box,
  SimpleGrid,
  Card,
  Image,
  Stack,
  CardBody,
  Heading,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

export default function Trips() {
  const trips = [
    {
      title: "Wycieczki Blanki i Bartka",
      image:
        "https://img.freepik.com/free-photo/couple-family-traveling-together_1150-7772.jpg",
      description: "Mapa wycieczek Blanki i Bartka.",
      mapLink:
        "https://www.google.com/maps/d/u/0/edit?mid=1X3RaXVy0R_nKeHS7ED2A1R1205Tr5sQ&ll=52.93084238512526%2C20.527521738015935&z=5",
    },
    {
      title: "Tripy Rowerowe",
      image:
        "https://blog.zenhotels.com/wp-content/uploads/2019/04/shutterstock_1305175711.png",
      description: "Mapa tripów rowerowych.",
      mapLink:
        "https://www.google.com/maps/d/u/0/edit?mid=1iEnt2cAJaoBufp2CHzVbBTEd9GQUFsg&ll=54.53610433095757%2C18.49943687351589&z=11",
      routesLink:
        "https://docs.google.com/document/d/1QwtL7F9SAbabVdNLgCcC73u6Ebgcya-r/edit?usp=sharing&ouid=106908458845496309344&rtpof=true&sd=true",
    },
    {
      title: "Tripy z Marcinem",
      image:
        "https://www.autozone.com/diy/wp-content/uploads/2019/10/road-trip-tips-870x580.jpg",
      description: "Mapa tripów z Marcinem.",
      mapLink:
        "https://www.google.com/maps/d/u/0/edit?mid=178ZR1W5YwK7taL2_zQqlXuHQzQLAkmg&ll=54.05972793404918%2C18.220309530919273&z=8",
    },
  ];

  return (
    <Box p={4}>
      <Heading mb={4}>Tripy</Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {trips.map((trip, index) => (
          <Card
            key={index}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="cover"
              maxW={{ base: "100%", sm: "200px" }}
              src={trip.image}
              alt={trip.title}
            />

            <Stack>
              <CardBody>
                <Heading size="md">{trip.title}</Heading>
                <Text py="2">{trip.description}</Text>
              </CardBody>

              <CardFooter>
                <Button
                  as="a"
                  href={trip.mapLink} // Ustaw link do mapy
                  variant="solid"
                  colorScheme="teal" // Ustaw kolor na teal
                  target="_blank" // Otwórz link w nowej karcie
                >
                  Otwórz mapę
                </Button>
                {/* Przyciski są dodawane tylko dla Tripów Rowerowych */}
                {trip.title === "Tripy Rowerowe" && (
                  <Button
                    as="a"
                    href={trip.routesLink} // Link do pliku Word
                    variant="outline"
                    colorScheme="blue" // Ustaw kolor na blue
                    target="_blank" // Otwórz link w nowej karcie
                    ml={2} // Ustaw margines z lewej
                  >
                    Trasy rowerowe
                  </Button>
                )}
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>

      {/* Sekcja planowania tripa */}
      <Box
        mt={8}
        p={4}
        borderWidth={1}
        borderRadius="lg"
        borderColor="gray.200"
      >
        <Heading size="lg" mb={4}>
          Zaplanuj wycieczkę
        </Heading>
        <Text mb={4}>
          Planuj swoją wymarzoną wycieczkę korzystając z Google Maps!
        </Text>
        <Button
          as="a"
          href="https://www.google.pl/maps/@54.4945801,18.4528092,20376m/data=!3m1!1e3?entry=ttu&g_ep=EgoyMDI0MTAwMi4xIKXMDSoASAFQAw%3D%3D" // Link do Google Maps
          variant="solid"
          colorScheme="teal"
          target="_blank"
        >
          Otwórz Google Maps
        </Button>
      </Box>
    </Box>
  );
}
