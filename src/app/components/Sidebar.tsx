import { Box, VStack } from "@chakra-ui/react";
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
        <Link href="/" passHref>
          Dashboard
        </Link>
        <Link href="/projects" passHref>
          Projekty
        </Link>
        <Link href="/drives" passHref>
          Linki do Dysków
        </Link>
      </VStack>
    </Box>
  );
}
