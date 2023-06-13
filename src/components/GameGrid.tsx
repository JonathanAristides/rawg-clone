import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";
import { GameCard } from "./GameCard.tsx";
import { GameCardSkeleton } from "./GameCardSkeleton.tsx";
import { GameCardContainer } from "./GameCardContainer.tsx";
import {Genre} from "../hooks/useGenres.ts";


interface GameGridProps {
    selectedGenre: Genre |null
}
export function GameGrid({selectedGenre}: GameGridProps) {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={10}
        spacing={5}
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
