import genres from "../data/genres.ts";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

function useGenres() {
  // return useData<Genre>("/genres");
  return { data: genres, isLoading: false, error: null };
}

export default useGenres;
