import { useQuery } from "@tanstack/react-query";
import { fetchPokemonSpecies } from "./utilities/utility";

const capitalize = (str: string): string => {
  const [first, ...rest] = str;
  return first.toLocaleUpperCase() + rest.join("");
};

const PkmMdSpecies = ({ speciesDetails }: { speciesDetails: string }) => {
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["species", speciesDetails],
    queryFn: async () => fetchPokemonSpecies(speciesDetails),
  });
  if (isLoading) return "Loading species...";
  if (isError) {
    console.error("Error fetching species data:", error);
    return "Error loading species.";
  }
  return (
    <div className=" h-full w-full  ">
      <div className="flex flex-col ">
        <div className=" flex flex-col">
          <div className="font-medium text-lg">Habitat </div>
          <div className="border w-36 px-4 py-1 rounded-sm flex justify-center ">
            {capitalize(data?.habitat?.name || "")}
          </div>
        </div>
        <div className="pt-4">
          <div className="font-medium text-lg">Generation</div>
          <div className="border w-36 px-4 py-1 rounded-sm flex justify-center ">
            {capitalize(data?.generation.name || "")}
          </div>
        </div>
        <div>
          <p>{data?.pokemon_species?.name || ""}</p>
        </div>
      </div>
    </div>
  );
};

export default PkmMdSpecies;
