import useGenres, { Genre } from "../hooks/useGenres.ts";
import { TbError404 } from "react-icons/tb";
import {
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

export function GenreList() {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return <Icon width={10} height={10} as={TbError404}  />;

  if (isLoading)
    return (
      <Spinner
        thickness="5px"
        speed="1s"
        emptyColor="#fff"
        color="#000"
        size="xl"
      />
    );

  return (
    <List>
      {genres.map((genre: Genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
