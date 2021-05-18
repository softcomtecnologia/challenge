export interface IProfile{
    name: string;
    rua: string;
    bairro: string;
    cep: string;
    cidade: string;
    estado: string;
    delivery: string;
    entrega: string;
    status: string;
}

export interface IProduct{
  id: number;
  imageUrl: string;
  nome: string;
  valor: number;
  oferta: number;
  categoria: string;
  sectionQuery: string; 
}


export interface ICartProduct{
  id: number;
  price: number;
  qtd: number;
}

export interface CartContextState{
  cart: ICartProduct[];
  handleAddItemCart: (product: ICartProduct) => void;
};

export interface ProfileContextState{
  dataProfile: IProfile;
  handleProfile: (profile: IProfile) => void;
};