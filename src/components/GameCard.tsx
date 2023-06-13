import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  Heading,
  Wrap,
  Image,
  useColorMode,
} from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList.tsx";
import { CriticScore } from "./CriticScore.tsx";
import getCroppedImageUrl from "../services/image-url.ts";

interface GameCardProps {
  game: Game;
}

export function GameCard({ game }: GameCardProps) {
  const { colorMode } = useColorMode();
  const cardBackgroundColor = colorMode === "light" ? "gray.200" : "";

  return (
    <Card  bg={cardBackgroundColor}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
        <Wrap align={"center"}>
          <PlatformIconList
            platforms={game.parent_platforms.map((parent) => parent.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Wrap>
      </CardBody>
    </Card>
  );
}
