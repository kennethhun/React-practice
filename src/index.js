import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './pages/App';
import Home from "./pages/Home";
import Dog from "./pages/Dog";
import Nav from "./pages/Nav";
import reportWebVitals from './reportWebVitals';

export default function Index() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Nav />}>
        <Route index element={<Home />} />
        <Route path="app" element={<App />} />
        <Route path="dog" element={<Dog />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);
