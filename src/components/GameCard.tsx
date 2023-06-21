import { Game } from "../hooks/useGames.ts";
import {
  Card,
  CardBody,
  Heading,
  Image,
  useColorMode,
  Wrap,
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
    <Card bg={cardBackgroundColor}>
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <Wrap justify={"space-between"} align={"center"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((parent) => parent.platform)}
          />
          <CriticScore score={game.metacritic} />
        </Wrap>
        <Heading fontSize={"2xl"}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
}
