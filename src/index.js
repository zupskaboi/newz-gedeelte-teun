import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SelectTopics from './pages/SelectTopics';
import SelectSources from './pages/SelectSources';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SelectSources />} />
        <Route path="/selecttopics" element={<SelectTopics />} />
      </Routes>
    </BrowserRouter>
  )
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
