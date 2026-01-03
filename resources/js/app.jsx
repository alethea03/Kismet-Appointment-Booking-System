import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import MainLayout from './components/MainLayout';
import CalendarView from './Pages/CalendarView';
import Staff from './Pages/Staff';
import Services from './Pages/Services';
import Customers from './Pages/Customers';
import Settings from './Pages/Settings';
import Payments from './Pages/Payments';
import Analytics from './Pages/Analytics';

function App() {
  const handleSlotClick = (time) => {
    setSelectedTime(time);
    setIsModalOpen(true);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } 
        />
        <Route 
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          } 
        />
        <Route 
          path="/calendar" 
          element={
            <MainLayout>
              <CalendarView onSlotClick={handleSlotClick} />
            </MainLayout>
          } 
        />
        <Route 
          path="/staff" 
          element={
            <MainLayout>
              <Staff />
            </MainLayout>
          } 
        />
        <Route 
          path="/services" 
          element={
            <MainLayout>
              <Services />
            </MainLayout>
          } 
        />
        <Route 
          path="/customers" 
          element={
            <MainLayout>
              <Customers />
            </MainLayout>
          } 
        />
        <Route 
          path="/payments" 
          element={
            <MainLayout>
              <Payments />
            </MainLayout>
          } 
        />
        <Route 
          path="/analytics" 
          element={
            <MainLayout>
              <Analytics />
            </MainLayout>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <MainLayout>
              <Settings />
            </MainLayout>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

const container = document.getElementById('app');
if (container) {
    const root = createRoot(container);
    root.render(<App />);
}