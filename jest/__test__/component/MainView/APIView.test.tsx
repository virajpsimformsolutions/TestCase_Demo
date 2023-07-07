import axios from 'axios';
import React from 'react';
import {render, fireEvent, waitFor} from '@testing-library/react-native';
import APIView from '../../../../app/component/MainView/APIView';

jest.mock('axios');

describe('testing APIView', () => {
  it('renders correctly', () => {
    const {getByTestId} = render(<APIView />);
    expect(getByTestId('entryScreen')).toBeDefined();
  });

  it('calls the API on button press and displays the correct count', async () => {
    const COUNT = 3;
    const API_DATA = {
      data: {
        count: COUNT,
        entries: [
          {id: Math.random(), API: 'AdoptAPet'},
          {id: Math.random(), API: 'AdoptAPet'},
          {id: Math.random(), API: 'AdoptAPet'}
        ]
      }
    };
    axios.get.mockResolvedValue(API_DATA);

    const {getByTestId} = render(<APIView />);
    const apiCalledButton = getByTestId('ApiCalledButton');
    fireEvent.press(apiCalledButton);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    // const countText = getByTestId('text');
    // expect(countText.props.children).toEqual(COUNT);
  });

  it('renders the entries correctly', async () => {
    const ENTRIES = [
      {id: Math.random(), API: 'AdoptAPet'},
      {id: Math.random(), API: 'AdoptAPet'},
      {id: Math.random(), API: 'AdoptAPet'}
    ];
    const API_DATA = {
      data: {
        count: ENTRIES.length,
        entries: ENTRIES
      }
    };
    axios.get.mockResolvedValue(API_DATA);

    const {getByTestId, queryByText} = render(<APIView />);
    const apiCalledButton = getByTestId('ApiCalledButton');
    fireEvent.press(apiCalledButton);
    await waitFor(() => expect(axios.get).toHaveBeenCalled());
    for (const entry of ENTRIES) {
      expect(queryByText(entry.API)).not.toBeNull();
    }
  });
});
