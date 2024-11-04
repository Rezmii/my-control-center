"use client";

import React, { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface Note {
  name: string;
  title?: string;
  textContent?: { text: string };
}

const NotesData: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    fetch("/api/googleKeep")
      .then((res) => res.json())
      .then((data: Note[]) => {
        setNotes(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <Box>
      <Heading as="h2" size="lg" mb={4}>
        Notatki z Google Keep
      </Heading>
      {notes.map((note) => (
        <Box
          key={note.name}
          border="1px solid #e2e8f0"
          p={4}
          mb={4}
          borderRadius="md"
          bg="white"
        >
          <Text fontWeight="bold">{note.title || "Brak tytułu"}</Text>
          <Text>{note.textContent?.text || "Brak treści"}</Text>
        </Box>
      ))}
    </Box>
  );
};

export default NotesData;
