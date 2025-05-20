// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Companies from './pages/Companies';
import Employee from './pages/Employees';
import Office from './pages/Offices';
import Packages from './pages/Packages';

const App: React.FC = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/office" element={<Office />} />
        <Route path="/packages" element={<Packages />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default App;
