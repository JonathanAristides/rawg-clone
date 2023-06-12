import { Game } from "../hooks/useGames.ts";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.background_image}></Image>
      <CardBody>
        <Heading fontSize={"3xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
