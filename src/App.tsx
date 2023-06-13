import { Grid, GridItem, Show, useColorMode } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar.tsx";
import { GameGrid } from "./components/GameGrid.tsx";
import { GenreList } from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  const { colorMode } = useColorMode();
  const asideBackgroundColor = colorMode === "light" ? "gray.200" : "";

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav" background={asideBackgroundColor}>
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <GameGrid selectedGenre={selectedGenre} />
      </GridItem>
      <Show above="lg">
        <GridItem
          area="aside"
          display={"grid"}
          justifyItems={"center"}
          paddingY={5}
          paddingX={5}
          background={asideBackgroundColor}
        >
          <GenreList onSelectGenre={(genre) => setSelectedGenre(genre)} />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
