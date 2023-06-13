import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";

export function GameGrid() {
  const { games, error, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={10}
        justifyItems={"center"}
      >
        {isLoading &&
          skeleton.map((item, index) => (
            <GameCardContainer key={index} >
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}

        {games.map((game,index) => (
          <GameCardContainer key={index} >
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
