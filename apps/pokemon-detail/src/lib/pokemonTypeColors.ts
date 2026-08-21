export const pokemonTypeColors: Record<string, { bg: string; text: string }> = {
  normal: { bg: "#A8A878", text: "#FFFFFF" },
  fighting: { bg: "#C03028", text: "#FFFFFF" },
  flying: { bg: "#A890F0", text: "#FFFFFF" },
  poison: { bg: "#A040A0", text: "#FFFFFF" },
  ground: { bg: "#E0C068", text: "#FFFFFF" },
  rock: { bg: "#B8A038", text: "#FFFFFF" },
  bug: { bg: "#A8B820", text: "#FFFFFF" },
  ghost: { bg: "#705898", text: "#FFFFFF" },
  steel: { bg: "#B8B8D0", text: "#FFFFFF" },
  fire: { bg: "#F08030", text: "#FFFFFF" },
  water: { bg: "#3898F8", text: "#FFFFFF" },
  grass: { bg: "#78C850", text: "#FFFFFF" },
  electric: { bg: "#F8D030", text: "#FFFFFF" },
  psychic: { bg: "#F85888", text: "#FFFFFF" },
  ice: { bg: "#98D8D8", text: "#FFFFFF" },
  dragon: { bg: "#7038F8", text: "#FFFFFF" },
  dark: { bg: "#705848", text: "#FFFFFF" },
  fairy: { bg: "#EE99AC", text: "#FFFFFF" },
  stellar: { bg: "#2E1A47", text: "#FFFFFF" },
  unknown: { bg: "#68A090", text: "#FFFFFF" },
};

export const getTypeColor = (typeName: string) => {
  return pokemonTypeColors[typeName.toLowerCase()] || { bg: "#999999", text: "#FFFFFF" };
};
