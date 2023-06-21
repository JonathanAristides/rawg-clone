import { Grid, GridItem, HStack, Show, useColorMode } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar.tsx";
import { GameGrid } from "./components/GameGrid.tsx";
import { GenreList } from "./components/GenreList.tsx";
import { useState } from "react";
import { Genre } from "./hooks/useGenres.ts";
import { PlatformSelector } from "./components/PlatformSelector.tsx";
import { GamePlatform } from "./hooks/useGames.ts";
import { SortSelector } from "./components/SortSelector.tsx";
import { GameHeading } from "./components/GameHeading.tsx";

export interface GameQuery {
  genre: Genre | null;
  platform: GamePlatform | null;
  sortOrder: string;
  searchTerm: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
        <NavBar
          onSearch={(searchTerm) => setGameQuery({ ...gameQuery, searchTerm })}
        />
      </GridItem>

      <GridItem area="main">
        <GameHeading  gameQuery={gameQuery} />

        <HStack spacing={5} paddingLeft={10}>
          <PlatformSelector
            selectedPlatform={gameQuery.platform}
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <SortSelector
            sortOrder={gameQuery.sortOrder}
            onSelectSortOrder={(sortOrder) =>
              setGameQuery({ ...gameQuery, sortOrder })
            }
          />
        </HStack>

        <GameGrid gameQuery={gameQuery} />
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
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
