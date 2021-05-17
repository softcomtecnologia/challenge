import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { CardBody, CardImg, CardText } from 'reactstrap';
import CardItemModal from './CardItemModal';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';

import initialState from '../constants/initialState';
import mockedQuery from '../mocks/mockedQuery';

const MAX_TEXT_LENGTH = 20;
const MAX_BUTTONS_COUNT = 7;

afterEach(cleanup);

const ModalChildren = () => (
  <CardBody>
    <CardImg
      top
      width="100%"
      src={ mockedQuery.results[0].thumbnail }
      alt="Card image cap"
    />
    <CardText
      className="description"
    >
      {mockedQuery.results[0].title.substr(0, MAX_TEXT_LENGTH)}
      ...
    </CardText>
  </CardBody>
);

const MockedComponent = () => (
  <CardItemModal freeShipping={ mockedQuery.results[0].shipping.free_shipping }>
    <ModalChildren />
  </CardItemModal>
);

describe('CardItemModal component and its children', () => {
  it('should be able to click on CardItemModal and render Modal', async () => {
    renderWithRouterAndStore(<MockedComponent />, { route: '/' }, initialState);

    const cardButtons = screen.getAllByRole(/button/i);

    expect(cardButtons.length).toBe(1);

    userEvent.click(cardButtons[0]);

    const modalButton = await screen.findAllByRole(/button/i);

    expect(modalButton.length).toBe(MAX_BUTTONS_COUNT);

    const addToCartBtn = screen.getAllByText(/adicionar/i);

    expect(addToCartBtn.length).toBe(1);
    expect(addToCartBtn[0]).toBeVisible();
    expect(addToCartBtn[0]).toBeEnabled();

    userEvent.click(addToCartBtn[0]);

    const modalDialog = await screen.findAllByRole('dialog');

    expect(modalDialog.length).toBe(1);
    expect(modalDialog[0]).toBeVisible();
    expect(modalDialog[0]).toHaveClass('modal fade');
  });
});
