import { ProductProvider } from '../../contexts/ProductContext';
import { Category } from '../Category';
import { Product } from '../Product';
import { Summary } from '../Summary';


export function Dashboard() {
  return (
    <ProductProvider>
      <Summary />
      <Category />
      <Product />
    </ProductProvider>
  );
}
