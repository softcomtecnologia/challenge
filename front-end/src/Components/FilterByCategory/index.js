import React, { useContext } from 'react';
import { productsCtx } from '../../context/productsContext';
import './style.css';

function FilterByCategory() {
  const { category, setCategory } = useContext(productsCtx);
  return (
    <nav className="nav-category">
      <ul>
        <li
          className={category === 'Sugestão do Vendedor' ? 'li-active' : ''}
          onClick={() => setCategory('Sugestão do Vendedor')}
        >
          Sugestão do Vendedor
        </li>
        <li
          className={category === 'brinquedos' ? 'li-active' : ''}
          onClick={() => setCategory('brinquedos')}
        >
          brinquedos
        </li>
        <li
          className={category === 'casinha' ? 'li-active' : ''}
          onClick={() => setCategory('casinha')}
        >
          casinha
        </li>
        <li
          className={category === 'coleiras' ? 'li-active' : ''}
          onClick={() => setCategory('coleiras')}
        >
          coleiras
        </li>
        <li
          className={category === 'petiscos' ? 'li-active' : ''}
          onClick={() => setCategory('petiscos')}
        >
          petiscos
        </li>
        <li
          className={category === 'saude' ? 'li-active' : ''}
          onClick={() => setCategory('saude')}
        >
          saude
        </li>
      </ul>
    </nav>
  );
}

export default FilterByCategory;
