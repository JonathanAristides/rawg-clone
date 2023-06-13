import { Box } from "@chakra-ui/react";
import React from "react";
import cardWidth from "../services/cardwidth.ts";

interface GameCardContainerProps {
  children: React.ReactNode;
}

export function GameCardContainer({ children }: GameCardContainerProps) {
  return (
    <Box width={cardWidth} borderRadius={10} overflow={"hidden"} >
      {children}
    </Box>
  );
}
