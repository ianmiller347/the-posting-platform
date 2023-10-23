'use client'

import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../state';

interface Props {
  children: ReactNode;
}

// some dumb next js stuff idk
const ReduxProvider = ({ children }: Props) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ReduxProvider;
