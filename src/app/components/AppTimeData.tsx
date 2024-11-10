"use client";

import { useEffect, useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

interface AppData {
  name: string;
  timeSpent: number;
}

const AppTimeData: React.FC = () => {
  const [appData, setAppData] = useState<AppData[]>([]);

  useEffect(() => {
    const fetchAppTime = async () => {
      const response = await fetch("/api/appTime");
      if (!response.ok) {
        console.error("Error fetching app time data");
        return;
      }
      const data: AppData[] = await response.json();
      setAppData(data);
    };

    fetchAppTime();
    const interval = setInterval(fetchAppTime, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      <Heading as="h2" fontSize="xl" mb={4}>
        Czas spędzony na aplikacjach:
      </Heading>
      {appData.map((app, index) => (
        <Text key={index}>
          {app.name}: {parseFloat(app.timeSpent.toFixed(2))} s
        </Text>
      ))}
    </Box>
  );
};

export default AppTimeData;
