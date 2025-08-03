// App.js or main.jsx
import React from 'react';
import { ChakraProvider} from '@chakra-ui/react';
import Portfolio from './portfolio';

// Optional: Extend theme for custom colors

function App() {
  return (
    <ChakraProvider >
      <Portfolio />
    </ChakraProvider>
  );
}

export default App;