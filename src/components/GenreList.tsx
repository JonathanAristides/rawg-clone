import useGenres, { Genre } from "../hooks/useGenres.ts";
import { TbError404 } from "react-icons/tb";
import {
  Button,
  HStack,
  Icon,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url.ts";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
}

export function GenreList({ onSelectGenre }: GenreListProps) {
  const { data: genres, error, isLoading } = useGenres();

  if (error) return <Icon width={10} height={10} as={TbError404} />;

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
        <ListItem key={genre.id} paddingY={"5px"}   >
          <HStack display={"flex"}>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button
              onClick={() => {
                onSelectGenre(genre);
              }}
              fontSize={"lg"}
              overflow={"hidden"}
              variant={"link"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
