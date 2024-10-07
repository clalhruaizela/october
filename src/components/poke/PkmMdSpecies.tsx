import { useQuery } from "@tanstack/react-query";
import { fetchPokemonSpecies } from "./utilities/utility";

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
    <div className=" h-full w-full flex flex-col bg-red-300">
      <div className=" flex flex-row">
        Habitat: <p>{data?.habitat?.name || ""}</p>
      </div>
      {/* <div>
        {data?.varieties && data?.varieties?.length > 0 ? (
          <ul>
            {data?.varieties.map((variety, index) => (
              <li key={index}>{variety.pokemon.name}</li>
            ))}
          </ul>
        ) : (
          <div>not</div>
        )}
      </div> */}
    </div>
  );
};

export default PkmMdSpecies;
