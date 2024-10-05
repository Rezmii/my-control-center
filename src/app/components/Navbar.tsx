import { Flex } from "@chakra-ui/react";
import Link from "next/link";

export default function Navbar() {
  return (
    <Flex as="nav" p={4} bg="teal.500" color="white">
      <Link href="/" passHref>
        Dashboard
      </Link>
      <Link href="/projects" passHref style={{ marginLeft: "16px" }}>
        Projekty
      </Link>
      <Link href="/drives" passHref style={{ marginLeft: "16px" }}>
        Linki do Dysków
      </Link>
    </Flex>
  );
}
