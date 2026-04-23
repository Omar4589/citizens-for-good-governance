import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SchaetzlePage from './pages/SchaetzlePage';
import ClaytonPage from './pages/ClaytonPage';

export default function App() {
  return (
    <Routes>
      <Route path="/schaetzle" element={<SchaetzlePage />} />
      <Route path="/clayton" element={<ClaytonPage />} />
      <Route path="*" element={<Navigate to="/schaetzle" replace />} />
    </Routes>
  );
}
