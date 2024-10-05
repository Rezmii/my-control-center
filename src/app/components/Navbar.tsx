"use client"; // Dodaj to jako pierwszą linię w pliku

import {
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi"; // Importuj ikonę strzałki w dół
import { FaCog, FaUser, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      p={4}
      bg="teal.600" // Zmiana koloru tła na ciemniejszy odcień
      color="white"
      justify="space-between"
      align="center"
    >
      {/* Sekcja z linkami */}
      <Flex align="center">
        <Link href="/" passHref>
          <Text
            mr={4}
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Dashboard
          </Text>
        </Link>
        <Link href="/projects" passHref>
          <Text
            mr={4}
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Projekty
          </Text>
        </Link>
        <Link href="/drives" passHref>
          <Text fontWeight="bold" _hover={{ textDecoration: "underline" }}>
            Linki do Dysków
          </Text>
        </Link>
      </Flex>

      {/* Sekcja powitania i rozwijanego menu */}
      <Flex align="center">
        <Avatar
          name="Bartek"
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" // Zastąp odpowiednią ścieżką do zdjęcia
          size="sm" // Zwiększenie rozmiaru awatara
          mr={2}
        />
        <Text mr={2} fontWeight="bold">
          Witaj, Bartek
        </Text>

        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Menu Options"
            variant="outline"
            colorScheme="teal"
            _hover={{ bg: "teal.500", color: "white" }}
            icon={<HiChevronDown color="white" />}
          ></MenuButton>
          <MenuList bg="teal.600" color="white">
            <MenuItem
              icon={<FaCog />}
              bg="teal.600"
              color="white"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              <Link href="/settings">Ustawienia</Link>
            </MenuItem>
            <MenuItem
              icon={<FaUser />}
              bg="teal.600"
              color="white"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              <Link href="/profile">Profil</Link>
            </MenuItem>
            <MenuItem
              icon={<FaSignOutAlt />}
              bg="teal.600"
              color="white"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              Wyloguj
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
}
