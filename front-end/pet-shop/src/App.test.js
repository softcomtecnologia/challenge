import React from 'react';
import { cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { renderWithRouterAndStore } from './helpers/renderWithRouterRedux';

import initialState from './constants/initialState';
import mockedQuery from './mocks/mockedQuery';

const FIFTY_ITEMS = 50;

afterEach(cleanup);

afterEach(() => jest.clearAllMocks());

describe('App nav tabs feature', () => {
  it('should renders sugestions button and text', () => {
    renderWithRouterAndStore(<App />, { route: '/' }, initialState);

    const sugestions = screen.getAllByText(/sugestões/i);

    expect(sugestions.length).toBe(2);
  });

  it('should be able to click on tabs and change content', async () => {
    renderWithRouterAndStore(<App />, '/', initialState);

    const toys = await screen.findAllByText(/brinquedos/i);

    expect(toys.length).toBe(1);

    userEvent.click(toys[0]);

    const toysTitle = await screen.findAllByText(/brinquedos/i);

    expect(toysTitle.length).toBe(2);
  });
});

describe('it should redirect and fetch api when click on an tab', () => {
  it(`should redirect to "/brinquedos" and fetch api
     when click on "Brinquedos"`, async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    const { history } = renderWithRouterAndStore(<App />, '/', initialState);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(1);

    const toys = await screen.findAllByText(/brinquedos/i);

    expect(toys.length).toBe(1);

    userEvent.click(toys[0]);

    const toysTitle = await screen.findAllByText(/brinquedos/i);

    expect(toysTitle.length).toBe(2);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(2);
    expect(mockedExchange).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=Brinquedos&limit=5');

    const { pathname } = history.location;

    expect(pathname).toBe('/brinquedos');
  });

  it(`should redirect to "/casinhas-e-camas" and fetch api
  when click on "Casinhas e Camas"`, async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    const { history } = renderWithRouterAndStore(<App />, '/', initialState);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(1);

    const toys = await screen.findAllByText(/casinhas/i);

    expect(toys.length).toBe(1);

    userEvent.click(toys[0]);

    const toysTitle = await screen.findAllByText(/casinhas/i);

    expect(toysTitle.length).toBe(2);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(2);
    expect(mockedExchange).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=Casinhas+e Camas&limit=5');

    const { pathname } = history.location;

    expect(pathname).toBe('/camas-e-casinhas');
  });

  it(`should redirect to "/coleiras" and fetch api
  when click on "Coleiras"`, async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    const { history } = renderWithRouterAndStore(<App />, '/', initialState);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(1);

    const toys = await screen.findAllByText(/coleiras/i);

    expect(toys.length).toBe(1);

    userEvent.click(toys[0]);

    const toysTitle = await screen.findAllByText(/coleiras/i);

    expect(toysTitle.length).toBe(2);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(2);
    expect(mockedExchange).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=Coleiras&limit=5');

    const { pathname } = history.location;

    expect(pathname).toBe('/coleiras');
  });

  it(`should redirect to "/ossos-e-petiscos" and fetch api
  when click on "Ossos e Petiscos"`, async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    const { history } = renderWithRouterAndStore(<App />, '/', initialState);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(1);

    const toys = await screen.findAllByText(/ossos/i);

    expect(toys.length).toBe(1);

    userEvent.click(toys[0]);

    const toysTitle = await screen.findAllByText(/ossos/i);

    expect(toysTitle.length).toBe(2);

    expect(mockedExchange).toBeCalled();
    expect(mockedExchange).toBeCalledTimes(2);
    expect(mockedExchange).toBeCalledWith('https://api.mercadolibre.com/sites/MLB/search?category=MLB1072&q=Ossos+e Petiscos&limit=5');

    const { pathname } = history.location;

    expect(pathname).toBe('/ossos-e-petiscos');
  });
});

describe('click on card item and add to cart', () => {
  it('should be able to add one (1) item to cart', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    renderWithRouterAndStore(<App />, '/', initialState);

    const snack = await screen.findByTestId('card-item-0');

    userEvent.click(snack.firstChild);

    const oneMore = await screen.findByText('+');

    userEvent.click(oneMore);

    const addItem = await screen.findByText('Adicionar');

    userEvent.click(addItem);

    const total = await screen.findAllByText(/R\$/i);

    expect(total[1].innerHTML).toBe('R$ 18.39');
    expect(mockedExchange).toHaveBeenCalledTimes(1);
  });

  it('should be able to add two (2) items to cart', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    renderWithRouterAndStore(<App />, '/', initialState);

    const snack = await screen.findByTestId('card-item-0');

    userEvent.click(snack.firstChild);

    const oneMore = await screen.findByText('+');

    userEvent.click(oneMore);

    const addItem = await screen.findByText('Adicionar');

    userEvent.click(addItem);

    userEvent.click(addItem);

    const total = await screen.findAllByText(/R\$/i);

    expect(total[1].innerHTML).toBe('R$ 36.78');
    expect(mockedExchange).toHaveBeenCalledTimes(1);
  });

  it('should be able to add fifty (50) items to cart', async () => {
    const apiResponse = Promise.resolve({
      json: () => Promise.resolve(mockedQuery),
      ok: true,
    });

    const mockedExchange = jest.spyOn(global, 'fetch')
      .mockImplementation(() => apiResponse);

    renderWithRouterAndStore(<App />, '/', initialState);

    const snack = await screen.findByTestId('card-item-0');

    userEvent.click(snack.firstChild);

    const oneMore = await screen.findByText('+');

    userEvent.click(oneMore);

    const addItem = await screen.findByText('Adicionar');

    for (let i = 1; i <= FIFTY_ITEMS; i += 1) {
      userEvent.click(addItem);
    }

    const total = await screen.findAllByText(/R\$/i);

    expect(total[1].innerHTML).toBe('R$ 919.50');
    expect(mockedExchange).toHaveBeenCalledTimes(1);
  });
});
