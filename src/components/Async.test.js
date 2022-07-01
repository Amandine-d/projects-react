import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts if request succeeds', async () => {
    window.fetch = jest.fn();
    //fn create a dummy function
    window.fetch.mockResolvedValueOnce({
      json: async () => [{
        id: 'p1',
        title: 'first post'
      }],
    });
    //we simulate the success case to not send unnecessary requests

    render(<Async />)

    const listItemElements = await screen.findAllByRole('listitem');
    expect(listItemElements).not.toHaveLength(0);
    //Check that the list is not empty
  });
});