import useData from "./useData.ts";

interface Platform {
  id: number;
  name: string;
  slug: string;
}

function usePlatforms() {
  return useData<Platform>("platforms/lists/parents");
}

export default usePlatforms;
