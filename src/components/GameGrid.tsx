import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames.ts";

export function GameGrid() {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}

      {games.map((game) => (
        <Text key={game.id}>{game.name}</Text>
      ))}
    </>
  );
}
