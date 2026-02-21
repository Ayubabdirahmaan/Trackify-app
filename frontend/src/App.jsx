import { Route, Routes } from "react-router-dom";
import { LadingPage } from "./Pages/ladingPage";
import { LoginPage } from "./Pages/auth/LoginPage";
import { RegistrationPage } from "./Pages/auth/RegistrationPage";
import { Dashboard } from "./Pages/Dashboard/Dashboard";
import { ProtectRoute } from "./components/Auth/protectRoute";
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectRoute>
              <Dashboard />
           </ProtectRoute>
          }
        />
        <Route path="/" element={<LadingPage />} />
      </Routes>
    </>
  );
}

export default App;
