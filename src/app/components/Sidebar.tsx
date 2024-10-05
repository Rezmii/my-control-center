"use client";

import { Box, VStack, Flex, Icon, Text } from "@chakra-ui/react";
import { FaFolder, FaBook, FaPlane } from "react-icons/fa"; // Importuj ikony
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box
      as="nav"
      pos="relative"
      w="200px"
      h="auto" // Ustawi wysokość na 100% widoku
      bg="gray.800"
      color="white"
      p={4}
      overflow="hidden" // Zablokuje przewijanie
    >
      <VStack align="start" spacing={4}>
        <Link href="/projects" passHref>
          <Flex
            align="center"
            gap={1}
            p={2} // Dodaj padding dla lepszego efektu hover
            borderRadius="md" // Zaokrąglone rogi
            _hover={{
              bg: "teal.600", // Zmiana koloru tła podczas hover
              color: "white", // Zmiana koloru tekstu podczas hover
            }}
          >
            <Icon as={FaFolder} boxSize={7} mr={2} />
            <Text fontSize="lg">Projekty</Text>
          </Flex>
        </Link>
        <Link href="/library" passHref>
          <Flex
            align="center"
            gap={1}
            p={2} // Dodaj padding dla lepszego efektu hover
            borderRadius="md" // Zaokrąglone rogi
            _hover={{
              bg: "teal.600", // Zmiana koloru tła podczas hover
              color: "white", // Zmiana koloru tekstu podczas hover
            }}
          >
            <Icon as={FaBook} boxSize={7} mr={2} />
            <Text fontSize="lg">Biblioteka</Text>
          </Flex>
        </Link>
        <Link href="/trips" passHref>
          <Flex
            align="center"
            gap={1}
            p={2} // Dodaj padding dla lepszego efektu hover
            borderRadius="md" // Zaokrąglone rogi
            _hover={{
              bg: "teal.600", // Zmiana koloru tła podczas hover
              color: "white", // Zmiana koloru tekstu podczas hover
            }}
          >
            <Icon as={FaPlane} boxSize={7} mr={2} />
            <Text fontSize="lg">Tripy</Text>
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
}
