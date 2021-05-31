import {
    Header,
    Navbar,
  SearchBar,
  CardProductMap,
  Footer,
} from '../components';

import * as S from "./styles";

export default () => {
  return (
    <S.main>
      <Header desableDetailsScreen={true} />
    </S.main>
  );
};
