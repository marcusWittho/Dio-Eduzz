import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { getQuote } from './QuotesService';

require('dotenv').config();

const response = { test: 'testing' };

const server = setupServer(
  rest.get(process.env.REACT_APP_API, (_req, res,ctx) => {
    return res(ctx.json(response));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Transform json response into object', async () => {
  const quote = await getQuote();

  expect(quote).toStrictEqual(response);
});
