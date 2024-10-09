import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Variety {
  pokemon: {
    name: string;
    url: string;
  };
}

const capitalize = (str: string): string => {
  const updatedstr = str.replace(/-/g, " ");
  return updatedstr
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};
export interface PokemonVarietiesSelect {
  varieties: Variety[];
  onChange: (selectedVariety: string) => void;
}

// export interface PokemonVarietiesSelect {

// }

const PokemonVariety: React.FC<PokemonVarietiesSelect> = ({
  varieties,
  onChange,
}) => {
  console.log("DropD-variesties", varieties);
  const [selectedVariety, setSelectedVariety] = useState<string | null>(null);
  const hasVarieties = varieties && varieties.length > 0;

  const handleSelectChange = (value: string) => {
    setSelectedVariety(value);
    onChange(value);
  };

  useEffect(() => {
    if (hasVarieties) {
      console.log("at 0", varieties[0]);
      const defaultVariety = varieties[0].pokemon.name;
      setSelectedVariety(defaultVariety);
      onChange(defaultVariety);
    }
  }, [varieties, onChange]);
  console.log("hasVarieties", hasVarieties);
  //   const defaultVariety = varieties.find((variety) => variety.variety);
  //   if (defaultVariety) {
  //     setSelectedVariety(defaultVariety.variety.name);
  //   }
  // }, [varieties]);
  return (
    <div>
      {hasVarieties && <>hi</>}
      {hasVarieties && (
        <Select
          value={selectedVariety || ""}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="my-2 w-full rounded-md  bg-black text-white hover:bg-gray-300">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className="bg-gray-600 text-white">
            {varieties.map((variety) => (
              <SelectItem
                key={variety.pokemon.name}
                value={variety.pokemon.name}
                onClick={() => onChange(variety.pokemon.name)}
              >
                {capitalize(variety.pokemon.name)}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    </div>
  );
};

export default PokemonVariety;
