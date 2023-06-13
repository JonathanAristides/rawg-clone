import useData from "./useData.ts";

export interface GamePlatform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: GamePlatform }[];
  metacritic: number;
}


function useGames() {
  return useData<Game>("/games");
}

export default useGames;
