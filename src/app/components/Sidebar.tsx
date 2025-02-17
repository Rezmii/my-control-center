"use client";

import { Box, VStack, Flex, Icon, Text } from "@chakra-ui/react";
import { FaBriefcase, FaBook, FaGlobe } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import Link from "next/link";

export default function Sidebar() {
  return (
    <Box
      as="nav"
      pos="relative"
      w="200px"
      h="auto"
      bg="gray.800"
      color="white"
      p={4}
      overflow="hidden"
    >
      <VStack align="start" spacing={4}>
        <Link href="https://goal-tracker-app-tan.vercel.app/czasowe" passHref>
          <Flex
            align="center"
            gap={1}
            p={2}
            borderRadius="md"
            _hover={{
              bg: "teal.600",
              color: "white",
            }}
          >
            <Icon as={GoGoal} boxSize={7} mr={2} />
            <Text fontSize="lg">Cele</Text>
          </Flex>
        </Link>
        <Link href="/pages/projects" passHref>
          <Flex
            align="center"
            gap={1}
            p={2}
            borderRadius="md"
            _hover={{
              bg: "teal.600",
              color: "white",
            }}
          >
            <Icon as={FaBriefcase} boxSize={7} mr={2} />
            <Text fontSize="lg">Projekty</Text>
          </Flex>
        </Link>
        <Link href="/pages/library" passHref>
          <Flex
            align="center"
            gap={1}
            p={2}
            borderRadius="md"
            _hover={{
              bg: "teal.600",
              color: "white",
            }}
          >
            <Icon as={FaBook} boxSize={7} mr={2} />
            <Text fontSize="lg">Biblioteka</Text>
          </Flex>
        </Link>
        <Link href="/pages/trips" passHref>
          <Flex
            align="center"
            gap={1}
            p={2}
            borderRadius="md"
            _hover={{
              bg: "teal.600",
              color: "white",
            }}
          >
            <Icon as={FaGlobe} boxSize={7} mr={2} />
            <Text fontSize="lg">Tripy</Text>
          </Flex>
        </Link>
      </VStack>
    </Box>
  );
}
