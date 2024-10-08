import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface Variety{
  variety:{
    name:string
    url:string
  }
}

export interface PokemonVarietiesSelect {
  // varieties: Array<{
  //   variety: {
  //     name: string;
  //     url: string;
  //   };
  // }>;
  varieties:Variety[]
  onChange:(selectedVariety:string)=> void
}

// export interface PokemonVarietiesSelect {

// }

const PokemonVariety: React.FC<PokemonVarietiesSelect> = ({ varieties ,onChange }) => {
  const [selectedVariety, setSelectedVariety] = useState<string | null>(null);

  const hasVarieties = varieties && varieties.length > 0;

  const handleSelectChange = (value: string) => {
    setSelectedVariety(value);
    onChange(value)
  };

  useEffect(() => {
    if(hasVarieties){
      const defaultVariety= varieties[0].variety.name
      setSelectedVariety(defaultVariety)
      onChange(defaultVariety)
    }
  },[varieties,onChange])
  //   const defaultVariety = varieties.find((variety) => variety.variety);
  //   if (defaultVariety) {
  //     setSelectedVariety(defaultVariety.variety.name);
  //   }
  // }, [varieties]);
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
    </div>
  );
};

export default PokemonVariety;
