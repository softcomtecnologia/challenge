import { sections } from "../services/mock.json";

const INITIAL_STATE = {
  productsOnCart: [],
  priceOfProductsOnCart: 0,
  desableDetailsScreen: true,
  query: "",
  products: sections.products,
};

const CATEGORIES = [
  "Sugestão do Vendendor",
  "Brinquedos",
  "Camas e Casinhas",
  "Coleiras",
  "Ossos e Petiscos",
  "Saúde",
];

export { INITIAL_STATE, CATEGORIES };
