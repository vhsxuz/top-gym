import { Stack } from '@chakra-ui/react';
import React from 'react'
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routing from './routes/Routing';

function App() {
  return (
    <Stack>
      <Navbar />
      <Routing />
    </Stack>
  )
}

export default App;