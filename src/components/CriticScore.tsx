import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

export function CriticScore({ score }: CriticScoreProps) {
  let color = score > 75 ? "green" : score > 50 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize={"14px"} paddingX={2} borderRadius={"4px"}>
      {score}
    </Badge>
  );
}
