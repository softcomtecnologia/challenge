import React from 'react';
import {
  Card, CardImg, CardTitle, CardText, CardGroup,
  CardSubtitle, CardBody,
} from 'reactstrap';
import CardItemModal from './CardItemModal';

const MainContentGrid = () => {
  const array = ['0', '1', '2', '3', '4'];
  return (
    <CardGroup>
      {array.map((e) => (

        <Card
          key={ e }
          // tag="a"
          // href="/"
          style={ { margin: '10px',
            borderLeft: ' 1px solid rgba(0,0,0,.125)' } }
        >
          <CardItemModal>
            <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">Card title</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">
                Card subtitle

              </CardSubtitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                {' '}

              </CardText>
            </CardBody>
          </CardItemModal>
        </Card>
      ))}
    </CardGroup>
  );
};

export default MainContentGrid;
