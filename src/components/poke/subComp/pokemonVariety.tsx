import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface PokemonVarietiesSelect {
  varieties: Array<{
    // is_default: boolean;
    variety: {
      name: string; // Name of the Pokémon variety
      url: string; // API URL for the variety
    };
  }>;
}

const PokemonVariety: React.FC<PokemonVarietiesSelect> = ({ varieties }) => {
  const [selectedVariety, setSelectedVariety] = useState<string | null>(null);

  const hasVarieties = varieties && varieties.length > 0;

  const handleSelectChange = (value: string) => {
    setSelectedVariety(value);
  };

  useEffect(() => {
    const defaultVariety = varieties.find((variety) => variety.variety);
    if (defaultVariety) {
      setSelectedVariety(defaultVariety.variety.name);
    }
  }, [varieties]);
  return (
    <div>
      {hasVarieties && (
        <Select
          value={selectedVariety || ""}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="my-2 w-full rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300">
            <SelectValue placeholder="Select a variety" />
          </SelectTrigger>
          <SelectContent>
            {varieties.map((variety) => (
              <SelectItem
                key={variety.variety.name}
                value={variety.variety.name}
              >
                {variety.variety.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
      {/* {selectedVariety && <p>Selected Variety: {selectedVariety}</p>} */}
    </div>
  );
};

// const getIdFromUrl = (url: string) => {
//   const parts = url.split("/");
//   return parseInt(parts[parts.length - 2], 10);
// };

// const handleSelect = (varietyName: string, varietyUrl: string) => {
//   const varietyId = getIdFromUrl(varietyUrl);
//   setSelectedVariety(varietyName);
//   onVarietyChange(varietyId);
// };

//   return varieties.length > 1 ? (
//     <Select
//       value={selectedVariety}
//       onValueChange={(value) => {
//         const selectedVariety = varieties.find((v) => v.name === value);
//         if (selectedVariety) {
//           handleSelect(selectedVariety.name, selectedVariety.url);
//         }
//       }}
//     >
//       <SelectTrigger className="w-full">
//         <SelectValue placeholder />
//       </SelectTrigger>
//       {varieties.map((variety, index) => (
//         <SelectItem key={index} value={variety.name}>
//           {variety.name}
//         </SelectItem>
//       ))}
//     </Select>
//   ) : null;
// };

export default PokemonVariety;
