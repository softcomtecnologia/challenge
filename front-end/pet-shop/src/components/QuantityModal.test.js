import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndStore } from '../helpers/renderWithRouterRedux';
import QuantityModal from './QuantityModal';

import mockedQuery from '../mocks/mockedQuery';
import initialState from '../constants/initialState';

let INIT_QUANT = 0;

beforeEach(cleanup);

afterEach(() => jest.clearAllMocks());

const setQuantity = (signal) => {
  if (signal === '+') {
    INIT_QUANT += 1;
  } else {
    INIT_QUANT -= 1;
  }
};

describe('QuantityModal component and children', () => {
  it('should be able to click on pluss `+` quantity and call a function', () => {
    const mockedSetQuantity = jest.fn().mockImplementation(() => setQuantity());

    renderWithRouterAndStore(
      <QuantityModal
        maxQuantity={ mockedQuery.results[0].available_quantity }
        setQuantity={ mockedSetQuantity }
        quantity={ INIT_QUANT }
      />,
      { route: '/' }, initialState,
    );

    const oneMoreItem = screen.getAllByText('+');

    expect(oneMoreItem).toHaveLength(1);
    expect(oneMoreItem[0]).not.toBeDisabled();

    const total = screen.getAllByText('0');

    expect(total).toHaveLength(1);
    expect(total[0]).toBeDisabled();

    userEvent.click(oneMoreItem[0]);

    expect(mockedSetQuantity).toHaveBeenCalled();
    expect(mockedSetQuantity).toHaveBeenCalledTimes(1);
    expect(mockedSetQuantity).toHaveBeenCalledWith(1);
  });

  it('should be able to click on pluss `-` quantity and call a function', () => {
    const mockedSetQuantity = jest.fn().mockImplementation(() => setQuantity());

    INIT_QUANT = 2;

    renderWithRouterAndStore(
      <QuantityModal
        maxQuantity={ mockedQuery.results[0].available_quantity }
        setQuantity={ mockedSetQuantity }
        quantity={ INIT_QUANT }
      />,
      { route: '/' }, initialState,
    );

    const oneMoreItem = screen.getAllByText('-');

    expect(oneMoreItem).toHaveLength(1);
    expect(oneMoreItem[0]).not.toBeDisabled();

    const total = screen.getAllByText('2');

    expect(total).toHaveLength(1);
    expect(total[0]).toBeDisabled();

    userEvent.click(oneMoreItem[0]);

    expect(mockedSetQuantity).toHaveBeenCalled();
    expect(mockedSetQuantity).toHaveBeenCalledTimes(1);
    expect(mockedSetQuantity).toHaveBeenCalledWith(1);
  });
});
