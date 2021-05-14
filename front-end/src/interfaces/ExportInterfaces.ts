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