import { Route, Routes } from "react-router-dom";
import { LadingPage } from "./Pages/ladingPage";
import { LoginPage } from "./Pages/auth/LoginPage";
import { RegistrationPage } from "./Pages/auth/RegistrationPage";


function App() {
  return (
   <>
   <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route path="/register" element={<RegistrationPage />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/" element={<LadingPage />} />
   </Routes>
   </>
  )
}

export default App;
