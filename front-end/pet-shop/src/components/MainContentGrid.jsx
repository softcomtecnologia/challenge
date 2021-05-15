import React, { useState } from 'react';
import {
  Card, CardImg, CardText, CardGroup, CardBody,
} from 'reactstrap';
import CardItemModal from './CardItemModal';
import './MainContentGrid.style.css';

import mockedQuery from '../mocks/mockedQuery';

const MAX_TEXT_LENGTH = 20;

const MainContentGrid = () => {
  const [data] = useState(mockedQuery.results);
  return (
    <CardGroup>
      {data.map((e) => (

        <Card
          key={ e.id }
          style={ { margin: '10px',
            borderLeft: ' 1px solid rgba(0,0,0,.125)' } }
        >
          <CardItemModal>
            <CardBody>
              <CardImg top width="100%" src={ e.thumbnail } alt="Card image cap" />
              <CardText
                className="description"
              >
                {e.title.substr(0, MAX_TEXT_LENGTH)}
                ...
              </CardText>
            </CardBody>
          </CardItemModal>
        </Card>
      ))}
    </CardGroup>
  );
};

export default MainContentGrid;
