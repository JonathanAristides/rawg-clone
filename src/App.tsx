import React from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar.tsx";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main" bg={"lightblue"}>
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg={"yellow"}>
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
