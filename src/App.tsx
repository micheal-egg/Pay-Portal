// src/App.tsx
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from './pages/Hero';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/DashboardPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
