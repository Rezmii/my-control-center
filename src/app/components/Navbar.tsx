"use client"; // Dodaj to jako pierwszą linię w pliku

import {
  Flex,
  Text,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  HStack,
  Divider,
  Icon,
} from "@chakra-ui/react";
import { HiChevronDown } from "react-icons/hi"; // Importuj ikonę strzałki w dół
import { FaCog, FaUser, FaSignOutAlt, FaGoogleDrive } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex
      as="nav"
      p={6} // Zwiększenie paddingu, aby powiększyć wysokość navbaru
      bg="teal.600" // Zmiana koloru tła na ciemniejszy odcień
      color="white"
      justify="space-between"
      align="center"
    >
      {/* Sekcja z linkami */}
      <Flex align="center">
        <Link href="/" passHref>
          <Text
            mr={6} // Zwiększenie marginesu
            fontSize="lg" // Zwiększenie rozmiaru tekstu
            fontWeight="bold"
            _hover={{ textDecoration: "underline" }}
          >
            Strona Główna
          </Text>
        </Link>
      </Flex>

      {/* Sekcja powitania i rozwijanego menu */}
      <Flex align="center">
        {/* Divider z ikonami do Google Mail i Google Dysku */}
        <HStack spacing={4} mr={6}>
          <Link
            href="https://mail.google.com/mail/u/0/?ogbl#inbox"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={SiGmail}
              boxSize={7} // Zwiększenie rozmiaru ikony
              color="white"
              _hover={{ color: "teal.300" }}
            />
          </Link>
          <Link
            href="https://drive.google.com/drive/u/0/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              as={FaGoogleDrive}
              boxSize={7} // Zwiększenie rozmiaru ikony
              color="white"
              _hover={{ color: "teal.300" }}
            />
          </Link>
        </HStack>

        <Divider
          orientation="vertical"
          height="40px" // Zwiększenie wysokości dividera
          borderColor="white"
          mr={6}
        />

        <Avatar
          name="Bartek"
          src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png" // Zastąp odpowiednią ścieżką do zdjęcia
          size="md"
          mr={4}
        />
        <Text mr={2} fontSize="lg" fontWeight="bold">
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
              <Link href="/pages/settings" passHref>
                Ustawienia
              </Link>
            </MenuItem>
            <MenuItem
              icon={<FaUser />}
              bg="teal.600"
              color="white"
              _hover={{ bg: "teal.500", color: "white" }}
            >
              <Link href="/profile" passHref>
                Profil
              </Link>
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
