import './App.css';

import Header from "./components/header/header"
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import { Box } from '@mui/material';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/details/DetailView';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:product_id' element={<DetailView />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
