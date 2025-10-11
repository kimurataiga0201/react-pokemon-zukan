// src/components/PokemonCard.tsx
import React from "react";
import { Link } from "react-router-dom";
import PokemonTypeLabel from "./PokemonTypeLabel";

export type PokemonDetail = {
  name: string;
  url: string;
  japaneseName: string;
  number: string;
  types: { type: { name: string } }[];
};

type PokemonCardProps = {
  pokemon: PokemonDetail;
};

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const id = pokemon.url.split("/").filter(Boolean).pop();
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

  return (
    <Link to={`/pokemon/${id}`}>
      <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center hover:shadow-xl transition-shadow">
        <p className="text-sm text-gray-500 mr-auto">No. {pokemon.number}</p>
        <img src={imageUrl} alt={pokemon.japaneseName} className="w-20 h-20" />
        <h2 className="mt-2 text-lg font-semibold">{pokemon.japaneseName}</h2>
        <div className="flex gap-2 mt-2">
          {pokemon.types?.map((typeInfo) => (
            <PokemonTypeLabel
              key={typeInfo.type.name}
              type={typeInfo.type.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default PokemonCard;
