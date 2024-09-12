const SUGESTIONS_URL = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=pedigree&limit=5';
const BASE_URL = 'https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=';
const LIMIT_5 = '&limit=5';

const apiML = (query) => {
  if (query.toLowerCase().includes('sugestões')) {
    return fetch(SUGESTIONS_URL);
  }
  return fetch(`${BASE_URL}${query}${LIMIT_5}`);
};

export default apiML;
