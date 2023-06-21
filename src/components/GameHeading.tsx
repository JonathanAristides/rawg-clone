import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App.tsx";

interface GameHeadingProps {
  gameQuery: GameQuery;
}

export function GameHeading({ gameQuery }: GameHeadingProps) {
  const heading = `
  ${gameQuery.platform?.name || ""} ${gameQuery.genre?.name || ""} Games
  `;

  return (
    <Heading paddingX={10} paddingY={5} as={"h1"} fontSize={"5xl"}>
      {heading}
    </Heading>
  );
}
