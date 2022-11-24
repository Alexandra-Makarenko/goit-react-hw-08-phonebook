import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { extendTheme, ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}

const theme = extendTheme({ colors })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/goit-react-hw-05-movies-1/">
        <ChakraProvider theme={theme}>
          <App />
          </ChakraProvider>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
