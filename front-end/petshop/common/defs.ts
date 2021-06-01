import { sections } from "../mock/index.json";

interface I_Initial_State {
  productsOnCart: any[];
  priceOfProductsOnCart: number;
  query: string;
  products: {
    id: number;
    thumbnail: string;
    product_name: string;
    price: number;
    promotion: number;
    description: string[];
  }[];
}

export const INITIAL_STATE: I_Initial_State = {
  productsOnCart: [],
  priceOfProductsOnCart: 0,
  query: "",
  products: sections.products,
};

export const CATEGORIES = [
  "Sugestão do Vendendor",
  "Brinquedos",
  "Camas e Casinhas",
  "Coleiras",
  "Ossos e Petiscos",
  "Saúde",
];
