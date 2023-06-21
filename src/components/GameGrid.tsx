import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";
import { GameQuery } from "../App.tsx";

interface GameGridProps {
  gameQuery: GameQuery;
}

export function GameGrid({ gameQuery }: GameGridProps) {
  const { data: games, error, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={10}
        spacing={8}
        justifyItems={"center"}
      >
        {isLoading &&
          skeleton.map((item, index) => (
            <GameCardContainer key={index}>
              <GameCardSkeleton key={item} />
            </GameCardContainer>
          ))}

        {games.map((game, index) => (
          <GameCardContainer key={index}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
}
