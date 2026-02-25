import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Analytics } from "@vercel/analytics/react";
import HomePage from "./pages/HomePage";
import Dzieki from "./pages/Dzieki";
import DziekiBardzo from "./pages/DziekiBardzo";
import Live from "./pages/Live";
import Kalendarz from "./pages/Kalendarz";
import NotFound from "./pages/NotFound";
import ScrollToHash from "./components/ScrollToHash";
import "./App.css";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dzieki" element={<Dzieki />} />
          <Route path="/dzieki-bardzo" element={<DziekiBardzo />} />
          <Route path="/live" element={<Live />} />
          <Route path="/kalendarz" element={<Kalendarz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </Router>
    </HelmetProvider>
  );
}

export default App;
