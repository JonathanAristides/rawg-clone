import useGenres, { Genre } from "../hooks/useGenres.ts";
import { TbError404 } from "react-icons/tb";
import { BiChevronLeft } from "react-icons/bi";
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
  selectedGenre?: Genre | null;
}

export function GenreList({ onSelectGenre, selectedGenre }: GenreListProps) {
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
        <ListItem key={genre.id} paddingY={"5px"}>
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
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              fontSize={"lg"}
              overflow={"hidden"}
              variant={"link"}
              rightIcon={
                genre.id === selectedGenre?.id ? <BiChevronLeft /> : undefined
              }
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
