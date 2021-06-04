export interface context {
  query: {
    id: string;
  };
}

export interface product {
  id: number;
  thumbnail: string;
  product_name: string;
  price: number;
}

export interface sections {
  "Sugestão do Vendedor": any[];
  Brinquedos: any[];
  "Camas e Casinhas": any[];
  Coleiras: any[];
  "Ossos e Petiscos": any[];
  Saúde: any[];
  products: any[];
}

export interface initialState {
  productsOnCart: any[];
  priceOfProductsOnCart: number;
  query: string;
  categories: string[];
  sections: sections;
}
