<<<<<<< HEAD
import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import { Home } from "./pages/Home";

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  );
}

export default App;
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.tsx";
import UserPage from "./pages/UserPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";
import withAdminAccess from "./hoc/withAdminAccess.tsx";
import RoleSwitcher from "./components/RoleSwitcher.tsx";

const ProtectedAdminPage = withAdminAccess(AdminPage);

export default function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav style={{ display: "flex", gap: "20px", marginBottom: "20px" }}>
          <Link to="/">Home</Link>
          <Link to="/user">User Page</Link>
          <Link to="/admin">Admin Page</Link>
        </nav>

        <RoleSwitcher />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/admin" element={<ProtectedAdminPage />} />
        </Routes>
      </div>
    </Router>
  );
}
>>>>>>> dfb1a47c5086ad1bc37f5a4635dae4878d66ff69
