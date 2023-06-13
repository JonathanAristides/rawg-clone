import useData from "./useData.ts";
import { Genre } from "./useGenres.ts";

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

function useGames(selectedGenre: Genre | null) {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
}

export default useGames;
